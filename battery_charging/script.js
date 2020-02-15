const bar = document.querySelector('.battery-bar');
window.addEventListener('load', charging);

function charging() {
	let persentege = 0;
	setInterval(() => {
		bar.style.width = persentege + '%';
		persentege += 10;
		if (persentege === 80) charging();
	}, 1000);
}
