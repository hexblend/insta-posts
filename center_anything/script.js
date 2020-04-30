const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// const alert = document.querySelector('.alert');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	Email.send({
		SecureToken: 'a6fe22b7-071c-44ec-b247-14b73c594fc0',
		To: email.value,
		From: 'vladbbr1@gmail.com',
		Subject: 'Hello',
		Body: message.value,
	}).then((message) => {
		alert(message);
		console.log(name, email, message);
		// alert.setAttribute('class', 'alert alert-success mb-5 d-block');
	});
});
