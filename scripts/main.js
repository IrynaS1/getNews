import {
	resultHeadlines,
	resultQuery,
} from './modules/getData.js';

import renderNews from './modules/renderNews.js';

import getQuery from './modules/getQuery.js';

const init = async () => {
	const dataHeadlines = await resultHeadlines();

	const headlinesBlock = document.querySelector('.headlines');

	renderNews(dataHeadlines, headlinesBlock);

	const btn = document.querySelector('.header-menu__item-input-search_button');

	btn.addEventListener('click', () => {
		const query = getQuery();

		if (query !== '') {
			const dataQueryLines = resultQuery(query);
			console.log('dataQueryLines', dataQueryLines);

			const queryNewsBlock = document.querySelector('.query');

			renderNews(dataQueryLines, queryNewsBlock);
		}
		console.log('input done');
	});
};

init();