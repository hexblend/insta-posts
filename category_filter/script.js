const categories = document.querySelectorAll('.categories li');
const grid = document.querySelector('.pictures-grid');
const initialSelected = document.querySelector('.selected');

let selectedCategory = initialSelected.innerText.toLowerCase(); // 'landscape'

// Pictures
const pictures = [
	{
		url:
			'https://images.unsplash.com/photo-1414788101029-46aec67101ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
		category: 'landscape'
	},
	{
		url:
			'https://images.unsplash.com/photo-1498637841888-108c6b723fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1782&q=80',
		category: 'landscape'
	},
	{
		url:
			'https://images.unsplash.com/photo-1563791877337-6224aa28e6af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		category: 'nature'
	},
	{
		url:
			'https://images.unsplash.com/photo-1519558292052-d7d41ced1d78?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
		category: 'nature'
	},
	{
		url:
			'https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
		category: 'portrait'
	},
	{
		url:
			'https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
		category: 'portrait'
	}
];

// Render pictures based on category
const renderPictures = category => {
	pictures.forEach(picture => {
		if (picture.category === category) {
			const img = document.createElement('img');
			img.src = picture.url;
			img.srcset = picture.url;
			grid.appendChild(img);
		}
	});
};

// Initial render
renderPictures(selectedCategory);

// Menu & Filter
categories.forEach(category => {
	category.addEventListener('click', () => {
		// Update selected category and add 'selected' class
		selectedCategory = category.innerText.toLowerCase();
		category.classList.add('selected');

		// Re-render pictures
		grid.innerHTML = '';
		renderPictures(selectedCategory);

		// Remove 'selected' class from the others
		categories.forEach(categ => {
			if (categ.innerText.toLowerCase() !== selectedCategory) {
				categ.classList.remove('selected');
			}
		});
	});
});
