async function getProducts() {
	try {
		const products = await axios.get('http://localhost:5000/api/products');
		return products;
	} catch (error) {
		console.log(error);
	}
}

function getProducts() {
	axios
		.get('http://localhost:5000/api/products')
		.then(products => {
			return products;
		})
		.catch(err => console.log(err));
}
