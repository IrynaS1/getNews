const getQuery = () => {
	const input = document.querySelector('.header-menu__item-input-search');

	const query = input.value;

	if (query !== '') {
		const openBlock = document.querySelector('.query-block');
		openBlock.style.display = 'block';
		return query;
	} else {
		console.log('query is empty', query);
	}
};

export default getQuery;