import getQuery from './getQuery.js';

const getItemsHeadlines = async () => {
	const getData = await fetch('https://newsapi.org/v2/top-headlines?country=ru', {
		headers: {
			'X-API-KEY': '83c261556fdd4508917c884d5643ee95',
		},
	});

	const data = await getData.json();

	const dataArticlesArray = data.articles;

	const dataArticles = dataArticlesArray.slice(0, 8);

	return dataArticles;
};

const dataHeadlines = await getItemsHeadlines();

export {
	dataHeadlines,
}