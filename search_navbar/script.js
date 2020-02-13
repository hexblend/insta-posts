const form = document.querySelector('.search-form');
const trigger = document.querySelector('.search-icon');
const leftItems = document.querySelector('.left-items');

trigger.addEventListener('click', () => {
	if (trigger.classList.contains('fa-search')) {
		trigger.classList.remove('fa-search');
		trigger.classList.add('fa-times');
		// Animation
		leftItems.style.opacity = 0;
		// form.style.opacity = 1;
		// form.style.zIndex = 1;
	} else {
		trigger.classList.remove('fa-times');
		trigger.classList.add('fa-search');
		// Animation
		leftItems.style.opacity = 1;
		form.style.opacity = 0;
		form.style.zIndex = -1;
	}
});
