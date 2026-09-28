'use client';

import RenderFooter from '@/components/FooterComponent';
import RenderHeader from '@/components/HeaderComponent';
import { DisplayFluentyAd } from '@/components/RenderFluenty';
import '@/css/index.css';
import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import CreateCard from '@/components/ThemeCard';
import ShowThemeSkeletonCards from '@/components/SkeletonCard';
import { API_URL } from '@/utils/globals';

interface ThemeLibraryProps {
	isSteamClient: boolean;
}

function ThemeLibrary({ isSteamClient }: ThemeLibraryProps) {
	const [cards, setCards] = useState<React.ReactNode[]>([]);
	const [tags, setTags] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState(1);
	const [selectedTags, setSelectedTags] = useState<{ label: string; value?: number } | null>({
		label: 'All',
	});
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL + '/api/v2');
				let result = await response.json();

				const buffer: string[] = ['All'];
				result.forEach((theme: any) => {
					theme?.tags?.forEach((tag: string) => {
						if (!buffer.includes(tag)) buffer.push(tag);
					});
				});
				setTags(buffer);

				if (searchQuery) {
					const query = searchQuery.toLowerCase();
					result = result.filter((item: any) => item.name?.toLowerCase().includes(query) || item.description?.toLowerCase().includes(query) || item.data?.github?.owner?.toLowerCase().includes(query));
				}

				let filteredData: any[] = [];

				if (selectedTags?.label !== 'Todos') {
					filteredData = result.filter((item: any) => item.tags.includes(selectedTags?.label));
				} else {
					filteredData = result;
				}

				let sorted = [...filteredData];

				switch (sortBy) {
					case 1:
						sorted = filteredData.sort((a: any, b: any) => (b?.data?.download ?? 0) - (a?.data?.download ?? 0));
						break;
					case 2:
						sorted = filteredData.sort((a: any, b: any) => (a?.data?.download ?? 0) - (b?.data?.download ?? 0));
						break;
					case 3:
						sorted = filteredData.sort((a: any, b: any) => new Date(b.commit_data.committedDate).getTime() - new Date(a.commit_data.committedDate).getTime());
						break;
					case 4:
						sorted = filteredData.sort((a: any, b: any) => new Date(a.commit_data.committedDate).getTime() - new Date(b.commit_data.committedDate).getTime());
						break;
					case 5:
						sorted = filteredData.sort((a: any, b: any) => a.name.localeCompare(b.name));
						break;
				}
				setCards(sorted.map((item: any) => <CreateCard key={item.id} data={item} />));
			} catch (error) {
				console.error('Erro ao obter dados:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [sortBy, selectedTags, searchQuery]);

	const [options, setOptions] = useState([
		{ value: 1, label: 'Mais Baixados', checked: true },
		{ value: 2, label: 'Menos Baixados', checked: false },
		{ value: 3, label: 'Atualizados Recentemente', checked: false },
		{ value: 4, label: 'Menos Atualizados Recentemente', checked: false },
		{ value: 5, label: 'Alfabeticamente', checked: false },
	]);

	const toggleCheckbox = (index: number) => {
		setOptions(
			options.map((option) => {
				if (option.value === index) {
					setSortBy(option.value);
					return { ...option, checked: !option.checked };
				}
				return { ...option, checked: false };
			}),
		);
	};

	return (
		<div>
			<div className="vm-placement" data-id="60f82387ffc37172cbbc0201"></div>
			<div className="vm-placement" id="vm-av" data-format="isvideo"></div>
			{!isSteamClient ? RenderHeader() : <></>}
			<main id="main-page-content">
				<section id="addons-header" className="page-section content-header">
					<div className="page-section-inner flex-container justify-between align-center" id="theme-header">
						<div className="header-left">
							<h1 className="title">Escolha um!</h1>
							<p className="title-tooltip">Explore os temas personalizados da comunidade. Podemos ter exatamente o que você procura!</p>
						</div>
					</div>
				</section>
				<div className="ad leaderboard_ros_atf" id="ad-container-1"></div>
				<div className="themes-panel">
					<div className="themes-toolbar">
						<div className="sort-pills">
							{options.map((option) => (
								<button key={option.value} type="button" className={`sort-pill${option.checked ? ' active' : ''}`} onClick={() => toggleCheckbox(option.value)}>
									{option.label}
								</button>
							))}
						</div>
						<Select
							instanceId="theme-tags"
							className="react-select-container"
							classNamePrefix="react-select"
							placeholder="Selecionar tags..."
							options={tags.map((tag, index) => ({ value: index, label: tag }))}
							onChange={(opt) => setSelectedTags(opt)}
							value={selectedTags}
						/>
						<form className="header-right search-container" onSubmit={(e) => e.preventDefault()} onReset={() => setSearchQuery('')}>
							<svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
								<path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
							</svg>
							<input className="search" id="addon-search" type="text" name="search" placeholder="Digite aqui para pesquisar..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
							<button className="search-clear-btn" type="reset">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16">
									<path
										fillRule="evenodd"
										d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
									></path>
								</svg>
							</button>
						</form>
					</div>
					<div className="themes-right-side">
						<section id="addons-content" className="page-section">
							<div className="theme-listings">
								{loading ? (
									<div className="card-container">
										<ShowThemeSkeletonCards cardHeight={337} />
									</div>
								) : !cards.length ? (
									<div className="no-results">
										<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
											<circle cx="11" cy="11" r="8" />
											<line x1="21" y1="21" x2="16.65" y2="16.65" />
											<line x1="8" y1="11" x2="14" y2="11" />
										</svg>
										<span className="no-results-title">Nenhum tema encontrado</span>
										<span className="no-results-description">Tente ajustar sua pesquisa ou filtros</span>
									</div>
								) : (
									<div className="card-container">
										<DisplayFluentyAd />
										{cards.map((card, index) => (
											<React.Fragment key={index}>{card}</React.Fragment>
										))}
									</div>
								)}
							</div>
						</section>
					</div>
				</div>
			</main>
			{!isSteamClient ? RenderFooter() : <></>}
		</div>
	);
}

export default ThemeLibrary;
