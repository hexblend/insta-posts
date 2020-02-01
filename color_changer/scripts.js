const red = document.querySelector('.red');
const cyan = document.querySelector('.cyan');
const violet = document.querySelector('.violet');
const orange = document.querySelector('.orange');
const pink = document.querySelector('.pink');

const box = document.querySelector('.center-box');

const getBackgroundColor = element => {
	return window.getComputedStyle(element).backgroundColor;
};

const changeBackgroundColor = (element, colorDiv, colorValue) => {
	return colorDiv.addEventListener('click', () => {
		element.style.background = colorValue;
	});
};

changeBackgroundColor(box, red, getBackgroundColor(red));
changeBackgroundColor(box, cyan, getBackgroundColor(cyan));
changeBackgroundColor(box, violet, getBackgroundColor(violet));
changeBackgroundColor(box, orange, getBackgroundColor(orange));
changeBackgroundColor(box, pink, getBackgroundColor(pink));
