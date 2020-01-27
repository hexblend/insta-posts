const list = document.querySelector('.list');
list.addEventListener('click', e => {
	const item = e.target;
	const listener = SwipeListener(item);
	item.addEventListener('swipe', e => {
		var directions = e.detail.directions;
		if (directions.left) {
			console.log('Swiped left.');
			item.style.left = '-140px';
		}
		if (directions.right) {
			console.log('Swiped right');
			item.style.left = '0';
		}
	});
});
