const trigger = document.querySelector('.trigger');
const songsView = document.querySelector('.songsView');
const backdrop = document.querySelector('.backdrop');

trigger.addEventListener('click', () => {
	songsView.style.top = '20%';
	backdrop.style.display = 'block';
});

backdrop.addEventListener('click', () => {
	songsView.style.top = '100%';
	backdrop.style.display = 'none';
});
