const sectionsArray = document.querySelectorAll('section');
const sectionsPos = {};

sectionsArray.forEach((section) => {
	sectionsPos[section.id] = section.offsetTop;
});

window.onscroll = () => {
	var scrollPosition =
		document.documentElement.scrollTop || document.body.scrollTop;
	for (id in sectionsPos) {
		if (sectionsPos[id] <= scrollPosition) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector(`a[href*=${id}]`).classList.add('active');
		}
	}
};
