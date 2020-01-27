const genItemHTML = text => {
	let listItemHTML = document.createElement('li');
	listItemHTML.classList.add('list-group-item');
	listItemHTML.innerText = text;
	return listItemHTML;
};
console.log(genItemHTML('Hello world'));

const list = document.querySelector('.list');
const items = [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }, { title: 'Item 4' }];
items.forEach(item => {
	list.appendChild(genItemHTML(item.title));
});

const form = document.querySelector('.add-list-form');
const input = document.querySelector('.itemInput');
form.addEventListener('submit', e => {
	e.preventDefault();
	list.appendChild(genItemHTML(input.value));
	input.value = '';
});
