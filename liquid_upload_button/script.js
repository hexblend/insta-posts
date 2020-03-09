const button = document.querySelector('.liquid-button');
button.addEventListener('click', () => {
	let count = 0;
	const counter = () => {
		if (count < 100) {
			count++;
			button.innerText = count + '%';
			button.style.animation = 'wave 5500ms ease-in-out forwards';
			count < 55
				? (button.style.color = '#000')
				: (button.style.color = '#fff');
		} else {
			clearInterval(animation);
			button.innerHTML = '<i class="fas fa-check"></i>';
		}
	};
	const animation = setInterval(counter, 40);
});
