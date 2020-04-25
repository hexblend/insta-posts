const header = document.querySelector('.header');
const content_expanded = document.querySelector('.content_expanded');
const content_collapsed = document.querySelector('.content_collapsed');

window.addEventListener('scroll', e => {
	const scrolled = window.pageYOffset;
	const header_height = header.offsetHeight;
	const percentage = Math.floor(scrolled / header_height * 100);

	// BG Going Dark
	const bg_opacity = 0.85 + percentage / 100;
	header.style.background = 
		`linear-gradient(rgba(24, 24, 24, ${bg_opacity}), rgba(24, 24, 24, 1)`;

	// Content Slide Up / Down
	if(percentage > 70) {
		content_expanded.style.bottom = 50 + 'px'
		content_collapsed.style.bottom = 5 + 'px';
		header.style.position = 'sticky';
		header.style.top = '-155px';
	} else {
		content_expanded.style.bottom = 5 + 'px'
		content_collapsed.style.bottom = -50 + 'px';
		header.style.position = 'relative';
		header.style.top = 0;
		header.style.borderBottom = '0';
	}
});