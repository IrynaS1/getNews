import data from './modules/getData.js';

import renderNews from './modules/renderNews.js';

import getQuery from './modules/getQuery.js';

const init = () => {
	const headlinesUrl = 'https://newsapi.org/v2/top-headlines?country=ru';

	const headlinesBlock = document.querySelector('.headlines');

	data(headlinesUrl, headlinesBlock);

	const btn = document.querySelector('.header-menu__search-button');

	btn.addEventListener('click', (e) => {
		e.preventDefault();

		const query = getQuery();

		if (query !== '') {
			const queryUrl = `https://newsapi.org/v2/everything?q=${query}`;

			const queryNewsBlock = document.querySelector('.query');

			data(queryUrl, queryNewsBlock);

			const title = document.querySelector('.main-title__query');
			title.textContent = `По вашему запросу “${query}” найдено 8 результатов`;

			const input = document.querySelector('.header-menu__item-input-search');
			input.value = '';
		}


	});
};

init();