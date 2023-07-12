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
	console.log('getItems ', getItems);
	const results = async () => {
		const result = await getItems;
		console.log('result', result);
		const dataItems = await result.json();
		console.log(' dataItems', dataItems);
		const dataArticles = dataItems.articles;
		console.log('dataArticle', dataArticles);
		const articles = dataArticles.slice(0, 8);
		console.log('articles ', articles);
		return articles;
	};

	const articles = await results();
	console.log('as result articles', articles);

	renderNews(articles, block);
};

export default data;