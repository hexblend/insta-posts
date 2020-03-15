const input = document.querySelector('.password-input');
const error = document.querySelector('.error-message');
const timeout = null;

const showError = message => {
	error.style.color = '#C91E1E';
	error.style.display = 'block';
	error.innerHTML = message;
};

const showPass = message => {
	error.style.color = '#119822';
	error.innerHTML = message;
};

const validatePassword = password => {
	const lowerCaseRegex = new RegExp('^(?=.*[a-z])');
	const upperCaseRegex = new RegExp('^(?=.*[A-Z])');
	const specialCharacterRegex = new RegExp('^(?=.*[!@#$%^&*])');
	const numericRegex = new RegExp('^(?=.*[0-9])');

	if (password.length < 6) {
		showError('Your password must be least 6 characters long.');
	} else if (!lowerCaseRegex.test(password)) {
		showError('Your password must include at least one lowercase character.');
	} else if (!upperCaseRegex.test(password)) {
		showError('Your password must include at least one uppercase character.');
	} else if (!specialCharacterRegex.test(password)) {
		showError('Your password must include at least one special character.');
	} else if (!numericRegex.test(password)) {
		showError('Your password must include at least one number.');
	} else {
		showPass('Strong password!');
	}
};

input.addEventListener('keyup', e => {
	const password = e.target.value;
	// Wait until typing stopped and then validate the password
	clearTimeout(timeout);
	timeout = setTimeout(() => validatePassword(password), 400);
});
