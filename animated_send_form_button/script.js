const btn = document.querySelector('.btn');
const btnText = document.querySelector('.btn .btn-text');
const btnIcon = document.querySelector('.btn .btn-icon');

btn.addEventListener('click', () => {
	btn.classList.add('sending');
	btnText.innerHTML = 'Sending...';

	setTimeout(() => {
		btn.classList.remove('sending');
		btnText.innerHTML = '<i class="fas fa-check"></i>';
		btn.classList.add('sent');
	}, 2000);
});
