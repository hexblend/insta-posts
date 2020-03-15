const items = document.querySelectorAll('li');
const current = document.querySelector('.current');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');

const firstItem = 0;
const lastItem = items.length - 1;

let selectedItem = 0;
const selectedHeight = current.offsetHeight;

const moveCurrent = direction => {
	switch (direction) {
		case 'up':
			if (selectedItem === firstItem) selectedItem = lastItem;
			else selectedItem--;
			break;
		case 'down':
			if (selectedItem === lastItem) selectedItem = firstItem;
			else selectedItem++;
			break;
		default:
			return true;
	}
	current.style.top = selectedHeight * selectedItem + 'px';
};

upBtn.addEventListener('click', () => moveCurrent('up'));
downBtn.addEventListener('click', () => moveCurrent('down'));
