import {
	dataHeadlines,
} from './modules/getData.js';

import renderNews from './modules/renderNews.js';

const init = () => {
	console.log(dataHeadlines);

	const headlinesBlock = document.querySelector('.news-block');

	renderNews(dataHeadlines, headlinesBlock);
};

init();