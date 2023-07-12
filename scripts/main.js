import data from './modules/getData.js';

import renderNews from './modules/renderNews.js';

import getQuery from './modules/getQuery.js';

const init = () => {
	const headlinesUrl = 'https://newsapi.org/v2/top-headlines?country=ru';

	const headlinesBlock = document.querySelector('.headlines');

	//data(headlinesUrl, headlinesBlock);

	const btn = document.querySelector('.header-menu__item-input-search_button');

	btn.addEventListener('click', () => {
		const query = getQuery();

		if (query !== '') {
			const queryUrl = `https://newsapi.org/v2/everything?q=${query}`;

			const queryNewsBlock = document.querySelector('.query');

			data(queryUrl, queryNewsBlock);
		}
	});
};

init();