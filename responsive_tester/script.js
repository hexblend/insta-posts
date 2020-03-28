const resBtns = document.querySelectorAll('.resButton');
const resetBtn = document.querySelector('.resetButton');
const view = document.querySelector('.responsiveView');

resBtns.forEach(button => {
	button.addEventListener('click', () => {
		view.style.width = button.value + 'px';
		button.classList.add('active');
		removeActive(button, resBtns);
	});
});

const removeActive = (el, array) => {
	array.forEach(element => {
		if (el !== element) {
			element.classList.remove('active');
		}
	});
};
