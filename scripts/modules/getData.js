import renderNews from './renderNews.js';

const data = async (url, block) => {
	const getItems = new Promise((resolve, reject) => {
		const data = fetch(url, {
			headers: {
				'X-API-KEY': '83c261556fdd4508917c884d5643ee95',
			}
		});
		resolve(data);
	});

	const results = async () => {
		const result = await getItems;

		const dataItems = await result.json();

		const dataArticles = dataItems.articles;

		const articles = dataArticles.slice(0, 8);

		return articles;
	};

	const articles = await results();

	renderNews(articles, block);
};

export default data;