const transition = document.querySelector('.transition');
const link = document.querySelector('.link');

link.addEventListener('click', e => {
	e.preventDefault();
	transition.classList.remove('d-none');
	setTimeout(() => {
		window.location.href = link.getAttribute('href');
	}, 1000);
});
