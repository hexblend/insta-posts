const pizza_input = document.querySelector('.pizza-input');
const hamburger_input = document.querySelector('.hamburger-input');
const steak_input = document.querySelector('.steak-input');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Pizza', 'Steak', 'Hamburger'],
		datasets: [
			{
				label: '# of Votes',
				data: [12, 19, 3],
				backgroundColor: ['#E4572E', '#17BEBB', '#FFC914'],
				borderWidth: 1
			}
		]
	}
});

const updateChartValue = (input, dataOrder) => {
	input.addEventListener('change', e => {
		myChart.data.datasets[0].data[dataOrder] = e.target.value;
		myChart.update();
	});
};

updateChartValue(pizza_input, 0);
updateChartValue(hamburger_input, 1);
updateChartValue(steak_input, 2);
