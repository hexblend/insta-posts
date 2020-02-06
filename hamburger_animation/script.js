const icon = document.querySelector('.icon');
icon.addEventListener('click', () => {
	if (!icon.classList.contains('open')) {
		icon.classList.add('open');
	} else {
		icon.classList.remove('open');
	}
});
