const openIcon = document.querySelector('.icon');
const linksWrapper = document.querySelector('.links-wrapper');
const backdrop = document.querySelector('.backdrop');
const closeIcon = document.querySelector('.close-btn');

openIcon.addEventListener('click', () => {
	linksWrapper.classList.add('open');
});
closeIcon.addEventListener('click', () => {
	linksWrapper.classList.remove('open');
});
backdrop.addEventListener('click', () => {
	linksWrapper.classList.remove('open');
});
