window.addEventListener('scroll', handleScroll);

function handleScroll() {
	const docHeight = document.body.scrollHeight;
	const windowHeight = window.innerHeight;
	const scrollTop = window.pageYOffset;

	const trackLength = docHeight - windowHeight;
	const percentage = Math.floor((scrollTop / trackLength) * 100);

	document.querySelector('.progress_bar').style.right = 100 - percentage + '%';
}
