import {
	resultHeadlines,
	resultQuery,
} from './getData.js';

const renderNews = (items, block) => {
	items.forEach(item => {
		const card = document.createElement('div');
		card.classList.add('news-block__card');

		card.innerHTML = `<div class="news-block__card-item card-img"></div>
		<div class="news-block__card-item card-description">
		<a href="${item.url}" target="_blanc">
			<div class="news-block__card-item card-description__top">
				<div class="card-description__top-title">${item.title}</div>
				<div class="card-description__top-move"></div>
			</div>
			</a>
			<div class="news-block__card-item card-description__info">${item.description}</div>
			<div class="card-description__details">
				<div class="card-description__details-date">
					<div class="card-description__details-date-date"></div>
					<div class="card-description__details-date-time"></div>
				</div>
				<div class="card-description__details-author">${item.author}</div>
			</div>
		</div>`;

		block.append(card);

		return block;
	});

	const descriptionBlocks = document.querySelectorAll('.card-description__info');

	for (let i = 0; i < descriptionBlocks.length; i++) {
		if (descriptionBlocks[i].textContent === 'null') {
			descriptionBlocks[i].textContent = '';
		}
	}

	const images = document.querySelectorAll('.card-img');

	for (let i = 0; i < items.length; i++) {
		if (items[i].urlToImage === null) {
			images[i].style.backgroundImage = 'url("../image/placeholder-img.jpg")';
		} else {
			images[i].style.backgroundImage = `url("${items[i].urlToImage}")`;
		}
	}

	const date = document.querySelectorAll('.card-description__details-date-date');

	const time = document.querySelectorAll('.card-description__details-date-time');

	for (let i = 0; i < items.length; i++) {
		const dataDate = items[i].publishedAt.substring(0, 10);
		date[i].textContent = `${dataDate}`;

		const dataTime = items[i].publishedAt.substring(11, 16);
		time[i].textContent = `${dataTime}`;
	}
};

export default renderNews;