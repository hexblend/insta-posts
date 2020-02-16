// Products list
const products = [
	{
		name: 'Samsung Galaxy S10',
		price: '599.99'
	},
	{
		name: 'Huawei P30 Pro',
		price: '490.76'
	},
	{
		name: 'Iphone 11 Pro',
		price: '1043.98'
	},
	{
		name: 'OnePlus 7T Pro',
		price: '697.80'
	}
];
// Generate <li> for each product
function generateHTML() {
	const ul = document.querySelector('.list-group');
	ul.innerHTML = '';
	products.forEach(product => {
		const li = document.createElement('li');
		li.classList.add('list-group-item');

		const name = document.createTextNode(product.name);
		li.appendChild(name);

		const span = document.createElement('span');
		span.classList.add('float-right');
		const price = document.createTextNode('£' + product.price);
		span.appendChild(price);

		li.appendChild(span);
		ul.appendChild(li);
	});
}

window.addEventListener('load', generateHTML);
const button = document.querySelector('.sort-btn');
button.addEventListener('click', () => {
	products.sort((a, b) => a.price - b.price);
	generateHTML();
});
