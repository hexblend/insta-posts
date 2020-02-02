const circle = document.querySelector('.circle-object');

const move = e => {
	circle.style.top = e.clientY + 'px';
	circle.style.left = e.clientX + 'px';
};

circle.addEventListener('mousedown', () => {
	window.addEventListener('mousemove', move);
});

window.addEventListener('mouseup', () => {
	window.removeEventListener('mousemove', move);
});
