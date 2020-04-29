const API_KEY = '16289840-170f59aefb23c39b6c1d72d90';

let page = 1;
function getPictures(page) {
	axios
		.get(
			`https://pixabay.com/api/
			?key=${API_KEY}
			&q=landscapes
			&image_type=photo
			&page=${page}`
		)
		.then((res) => {
			// Page 1 of Images from the API
			const images = res.data.hits;
			// Create HTML
			const photoHTML = (src) => {
				const div = document.createElement('div');
				div.classList.add('singlePhoto');
				const image = document.createElement('img');
				image.src = src;
				div.appendChild(image);
				return div;
			};
			// Add the HTML to the page
			const grid = document.querySelector('.photosGrid');
			images.forEach((image) => {
				grid.appendChild(photoHTML(image.largeImageURL));
			});
		})
		.catch((err) => console.log(err));
}
getPictures(page);

// Infinite Scrolling
window.addEventListener('scroll', (e) => {
	const pageHeight = document.documentElement.offsetHeight;
	const windowHeight = window.innerHeight;

	const scrollableArea = pageHeight - windowHeight - 1;
	const scrollPos = window.pageYOffset;

	if (scrollPos >= scrollableArea) {
		// Generate new content
		console.log('At the bottom');
		page++;
		getPictures(page);
	}
});
