import {
	dataHeadlines,
	getItemsQuery,
	//dataQuery,
} from './modules/getData.js';

import renderNews from './modules/renderNews.js';

import getQuery from './modules/getQuery.js';

const init = () => {
	console.log('dataHeadlines', dataHeadlines);

	const headlinesBlock = document.querySelector('.headlines');

	renderNews(dataHeadlines, headlinesBlock);

	const btn = document.querySelector('.header-menu__item-input-search_button');

	btn.addEventListener('click', () => {
		const query = getQuery();

		if (query !== '') {
			const dataQueryLines = getItemsQuery(query);
			console.log('dataQueryLines', dataQueryLines);

			const queryNewsBlock = document.querySelector('.query');

			renderNews(dataQueryLines, queryNewsBlock);
		}
		console.log('input done');
	});
};

init();