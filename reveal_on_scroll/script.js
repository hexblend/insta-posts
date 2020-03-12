const sections = document.querySelectorAll('.section');
const viewHeight = window.innerHeight;

const revealSection = () => {
	sections.forEach(section => {
		const distanceFromTop = section.getBoundingClientRect().top;
		distanceFromTop < viewHeight - 100
			? section.classList.add('scroll-reveal')
			: section.classList.remove('scroll-reveal');
	});
};

window.addEventListener('load', () => revealSection());
window.addEventListener('scroll', () => revealSection());
