import { join } from 'path';
import { stat } from 'fs/promises';
import { FetchPlugins } from '../../plugins/GetPlugins';

export const dynamic = 'force-dynamic';

const FindPlugin = async (id: string) => {
	const plugin = (await FetchPlugins()).pluginData.find((plugin) => plugin.id === id);

	if (!plugin) {
		throw new Error('Plugin não encontrado');
	}

	const pluginsDir = process.env.PLUGINS_DIR;

	try {
		if (pluginsDir) {
			const s = await stat(join(pluginsDir, `${plugin.initCommitId}.zip`));
			plugin.fileSize = s.size;
			plugin.hasValidBuild = true;
		} else {
			console.warn(`Plugin ${plugin.id} não possui uma versão compilada disponível.`);
			plugin.hasValidBuild = false;
		}
	} catch (error) {
		console.error('Ocorreu um erro ao verificar a compilação do plugin:', error);
		plugin.hasValidBuild = false;
	}

	plugin.downloadUrl = `/api/v1/plugins/download/?id=${plugin?.initCommitId}&n=${plugin?.pluginJson?.name}.zip`;
	return plugin;
};

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	try {
		const response = Response.json(await FindPlugin(slug), {
			status: 200,
		});
		response.headers.set('Access-Control-Allow-Origin', 'https://steamloopback.host');
		response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

		return response;
	} catch (error) {
		const response = new Response(error.message, {
			status: 404,
		});

		response.headers.set('Access-Control-Allow-Origin', 'https://steamloopback.host');
		response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
		response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

		return response;
	}
}

export async function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: {
			/** Adicione o cliente Steam à lista de permissões para permitir que ele faça solicitações. */
			'Access-Control-Allow-Origin': 'https://steamloopback.host',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		},
	});
}
