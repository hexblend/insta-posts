const elements = document.querySelectorAll('.list-group-item');
const elementsNumber = elements.length;
let current = 0;
const timeToSlide = 300;

const slideIn = () => {
	if (current < elementsNumber) {
		setTimeout(() => {
			elements[current].style.left = 0;
			current++;
			slideIn();
		}, timeToSlide);
	}
}
slideIn();
