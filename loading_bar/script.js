const wrapper = document.querySelector('.loading-wrapper');
const bar = document.querySelector('.loading-bar');
const number = document.querySelector('.loading-number');

const max = 100;
let current = 0;

const counter = () => {
	setInterval(() => {
		if (current === max) {
			clearInterval(this);
		} else {
			current++;
			number.innerHTML = current + '%';
			bar.style.width = current + '%';
		}
	}, 20);
};
