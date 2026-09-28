import type { NextConfig } from 'next';

const config: NextConfig = {
	serverExternalPackages: ['better-sqlite3'],
	async redirects() {
		return [
			{
				source: '/plugin',
				has: [{ type: 'query', key: 'id', value: '(?<id>.+)' }],
				destination: '/plugin/:id',
				permanent: false,
			},
			{
				source: '/tema',
				has: [{ type: 'query', key: 'id', value: '(?<id>.+)' }],
				destination: '/tema/:id',
				permanent: false,
			},
		];
	},
};

export default config;
