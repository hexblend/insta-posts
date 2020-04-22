const circle = document.querySelector('.circle-object');

const move = (e) => {
	circle.style.top = e.clientY + 'px';
	circle.style.left = e.clientX + 'px';
};

circle.addEventListener('mousedown', () => {
	window.addEventListener('mousemove', move);
	circle.style.transition = 'none';
});

circle.addEventListener('mouseup', (e) => {
	window.removeEventListener('mousemove', move);
	snapToSide(e);
	circle.style.transition = '0.3s ease-in-out left';
});

const snapToSide = (e) => {
	const windowWidth = window.innerWidth;
	const currentPosition = e.clientX;

	if (currentPosition < windowWidth / 2) {
		circle.style.left = 10 + 'px';
	} else {
		circle.style.left = windowWidth - 10 + 'px';
	}
};
