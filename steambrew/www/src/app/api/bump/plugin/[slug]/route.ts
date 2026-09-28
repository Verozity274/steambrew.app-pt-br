import { PluginDownloads } from '../../../Database';
import { FetchPlugins } from '../../../v1/plugins/GetPlugins';

function withCORS(response: Response): Response {
	response.headers.set('Access-Control-Allow-Origin', 'https://steamloopback.host');
	response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
	return response;
}

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	if (!slug) {
		return withCORS(
			new Response(JSON.stringify({ success: false, message: 'Plugin ausente' }), {
				status: 400,
			}),
		);
	}

	try {
		const { pluginData } = await FetchPlugins();
		const plugin = pluginData.find((p) => p.id === slug || p.initCommitId === slug);

		if (!plugin || !plugin.initCommitId) {
			return withCORS(
				new Response(JSON.stringify({ success: false, message: 'Plugin não encontrado' }), {
					status: 404,
				}),
			);
		}

		const newCount = PluginDownloads.increment(plugin.initCommitId);

		return withCORS(
			new Response(
				JSON.stringify({
					success: true,
					message: 'Contagem de downloads atualizada com sucesso.',
					downloadCount: newCount,
				}),
				{ status: 200 },
			),
		);
	} catch (err) {
		console.error('Erro ao atualizar a contagem de downloads:', err);
		return withCORS(
			new Response(
				JSON.stringify({
					success: false,
					message: 'Ocorreu um erro ao atualizar a contagem de downloads.',
				}),
				{ status: 500 },
			),
		);
	}
}
