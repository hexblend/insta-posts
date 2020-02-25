const counter_el = document.querySelector('.counter');
const description_el = document.querySelector('.description');

let count = 0;
setInterval(() => {
	if (count < 1000) {
		count++;
		counter_el.innerText = count;
	}
}, 5);

setTimeout(() => {
	counter_el.innerText = 'Thank you! 🥳';
	description_el.style.opacity = 0;
}, 6000);
