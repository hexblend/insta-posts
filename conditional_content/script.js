const links = document.querySelectorAll('.link');
const contents = document.querySelectorAll('.content');

let activeLink = document.querySelector('.link.active');
let activeContent = document.querySelector('.content.active');

for (let i = 0; i < links.length; i++) {
	links[i].addEventListener('click', () => {
		// Switch Links
		activeLink.classList.remove('active');
		links[i].setAttribute('class', 'link active');
		activeLink = links[i];

		// Switch Contents
		activeContent.classList.remove('active');
		contents[i].setAttribute('class', 'content active');
		activeContent = contents[i];
	});
}
