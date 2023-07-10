const getItemsHeadlines = new Promise((resolve, reject) => {
	resolve(fetch('https://newsapi.org/v2/top-headlines?country=ru', {
		headers: {
			'X-API-KEY': '83c261556fdd4508917c884d5643ee95',
		}
	}));
});

const resultHeadlines = async () => {
	const result = await getItemsHeadlines;

	const data = result.json();

	const dataArticles = await data;

	const dataArticlesArray = dataArticles.articles;

	const dataHeadlinesArticles = dataArticlesArray.slice(0, 8);

	return dataHeadlinesArticles;
};

const getItemsQuery = async (query) => {
	console.log(query);
	const getData = new Promise((resolve, reject) => {
		resolve(fetch(`https://newsapi.org/v2/everything?q=${query}`, {
			headers: {
				'X-API-KEY': '83c261556fdd4508917c884d5643ee95',
			}
		}));
	});
};

const resultQuery = async () => {
	const result = await getItemsQuery;

	const data = result.json();

	const dataArticles = await data;

	const dataArticlesArray = dataArticles.articles;

	const dataQueryArticles = dataArticlesArray.slice(0, 8);

	return dataQueryArticles;
};

//const allItems = Promise.all([getItemsHeadlines, getItemsQuery]);
//const query = getQuery();
//const dataQuery = await getItemsQuery(query);

export {
	resultHeadlines,
	resultQuery,
}