const body = document.querySelector('body');
body.addEventListener('mousemove', e => {
	let xCord = e.clientX;
	let xPercent = Math.floor((xCord / window.innerWidth) * 100);
	document.querySelector('.black-and-white').style.width = xPercent + '%';
	document.querySelector('.colorful').style.width = 100 - xPercent + '%';
});
