const btn = document.querySelector('.btn');
const bell = document.querySelector('.bell');
let isSubscribed = false;

btn.addEventListener('click', () => {
	// Subscribe button
	if (!btn.classList.contains('subscribed')) {
		btn.classList.add('subscribed');
		btn.innerText = 'Subscribed';
		isSubscribed = true;
	} else {
		btn.classList.remove('subscribed');
		btn.innerText = 'Subscribe';
		isSubscribed = false;
	}

	// Show Bell
	if (isSubscribed) {
		bell.style.display = 'block';
	} else {
		bell.style.display = 'none';
	}
});
// Push the bell
bell.addEventListener('click', () => {
	if (!bell.classList.contains('ring')) {
		bell.classList.add('ring');
	} else {
		bell.classList.remove('ring');
	}
});
