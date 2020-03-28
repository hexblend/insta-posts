const tabs = document.querySelectorAll('.tab');

const openTab = tab => {
	const content = tab.childNodes[3];
	const contentHeight = content.scrollHeight;
	content.style.height = contentHeight + 'px';
};

const closeOthersTabs = (tabs, openTab) => {
	tabs.forEach(tab => {
		if (tab !== openTab) {
			const content = tab.childNodes[3];
			content.style.height = 0;
		}
	});
};

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		openTab(tab);
		closeOthersTabs(tabs, tab);
	});
});
