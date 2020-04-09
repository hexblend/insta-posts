const grid = document.querySelector('.grid');

// Create an image dynamically
const createImg = (url) => {
	const img = document.createElement('img');
	img.src = url;
	return img;
};

// Add all images to the grid
let i = 1;
setInterval(() => {
	if (i < 81) {
		i++;
		grid.appendChild(createImg(`./img/${i}.png`));
	}
}, 120);

// Change the text
const text = document.querySelector('.text');
const text2 = document.querySelector('.text-2');
setTimeout(() => {
	text.style.display = 'none';
	text2.style.display = 'block';
}, 14000);
