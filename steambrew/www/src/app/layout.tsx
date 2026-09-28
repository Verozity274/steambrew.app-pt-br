import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

const description = 'Um framework de modding de baixo código de código aberto para criar, gerenciar e usar temas/plugins para o cliente desktop do Steam sem nenhuma interação interna de baixo nível ou sobrecarga.';

export const metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title: 'Millennium - Steam Homebrew',
	description: description,
	url: 'https://steambrew.app/pt-br/',
	image: '/favicon/favicon.svg',
	imageAlt: 'Millennium para o logotipo do Steam',
	openGraph: {
		title: 'O Projeto de Aprimoramento da Steam',
		description: description,
		url: 'https://steambrew.app/pt-br/',
		image: '/favicon/favicon.svg',
		imageAlt: 'Millennium para o logotipo do Steam',
		siteName: 'Steam Homebrew',
	},
	twitter: {
		card: 'summary',
		site: 'Steam Homebrew - Millennium',
		title: 'O Projeto de Aprimoramento da Steam',
		description: description,
		url: 'https://steambrew.app/pt-br/',
		image: '/favicon/favicon.svg',
		imageAlt: 'Millennium para o logotipo do Steam',
	},
	siteName: 'Steam Homebrew - Millennium',
	keywords:
		'Steam, Steam++, Better Steam, Steam Mod, Steam Temas, Steam Plugins, Steam Extensões, Steam Client Mod, Steam Hacks, Millennium, Millennium Steam, Millennium Steam Patcher, Steam Patcher, Millennium Patcher, Patcher, Millennium for Steam, Millennium Steam',
	author: 'Steam Homebrew',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} style={{ backgroundColor: '#0f0f0f' }}>
			<body className={'SteamBrewAppBody'}>{children}</body>
		</html>
	);
}
