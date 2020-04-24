const items = document.querySelectorAll('li');
const underline = document.querySelector('.underline');

// Set intial size of the bar
underline.style.width = items[0].offsetWidth + 'px';

for (let i = 0; i < items.length; i++) {
	const li = items[i];

	li.addEventListener('click', () => {
		document.querySelector('.active').classList.remove('active');
		li.classList.add('active');

		// Move the bar dynamically
		let sizeToMove = 0;
		for (let j = 0; j < i; j++) {
			sizeToMove += items[j].offsetWidth;
		}
		underline.style.left = sizeToMove + 'px';
		underline.style.width = li.offsetWidth + 'px';
	});
}
