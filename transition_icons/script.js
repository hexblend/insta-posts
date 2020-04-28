const button = document.querySelector('.btn');
const icon = document.querySelector('.icon');

icon.style.transition = '300ms ease-in-out';
let open = false;

button.addEventListener('click', () => {
	if (!open) {
		// Change to X
		icon.style.transform = 'rotate(-90deg)';
		setTimeout(
			() => icon.setAttribute('class', 'fas fa-times icon'),
			120
		);
		open = true;
	} else {
		// Change back to ▼
		icon.style.transform = 'rotate(0)';
		setTimeout(
			() => icon.setAttribute('class', 'fas fa-angle-down icon'),
			120
		);
		open = false;
	}
});
