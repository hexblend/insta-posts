const loaderWrapper = document.querySelector('.loader-wrapper');
const loader = document.querySelector('.loader');

const loadingTime = 1500;

setTimeout(() => {
	loader.style.transform = 'scale(100)';
}, loadingTime);

setTimeout(() => {
	loaderWrapper.style.display = 'none';
}, loadingTime + 150);
