const input = document.querySelector('.search');
const ul = document.querySelector('.results');
// prettier-ignore
const cities = ['Tokyo', 'Delhi', 'Shanghai', 'Mumbai', 'Sao Paolo', 'Beijing', 'Mexico City','New York City', 'Rio de Janeiro'];
const foundCities = [];

const genHTML = (city) => {
	const result = document.createElement('li');
	result.classList.add('result');
	result.innerText = city;
	return result;
};

let timeout = null;

input.addEventListener('keyup', (e) => {
	clearTimeout(timeout);
	const query = e.target.value;

	// Wait for the user to stop typing
	timeout = setTimeout(() => {
		if (query !== '') {
			// Search through the list
			cities
				.filter((city) => city.toLowerCase().includes(query.toLowerCase()))
				.forEach((city) => {
					// Add city if not found already
					if (foundCities.indexOf(city) === -1) {
						foundCities.push(city);
						ul.appendChild(genHTML(city));
					}
				});

			// Set search on click [Optional]
			document.querySelectorAll('.result').forEach((result) => {
				result.addEventListener('click', () => {
					input.value = result.innerText;
					// Clear results
					foundCities.splice(0, foundCities.length);
					ul.innerHTML = '';
				});
			});
		}
	}, 500);

	// Clear results
	if (query === '') {
		foundCities.splice(0, foundCities.length); // Clear foundCities array
		ul.innerHTML = ''; // Clear the ul
	}
});
