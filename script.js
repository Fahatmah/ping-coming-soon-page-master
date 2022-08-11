const form = document.getElementById('form');
const email = document.getElementById('email');
const notifyButton = document.getElementById('notifyButton');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	emailInputCheck();
});

function emailInputCheck() {
	const emailVal = email.value.trim();

	if (emailVal == '') {
		invalidEmail(email, 'Enter your email first');
		notifyButton.classList.add('invalidEmail');
	} else if (!isEmail(emailVal)) {
		invalidEmail(email, 'Please provide a valid email address');
		notifyButton.classList.add('invalidEmail');
	} else {
		notifyButton.classList.remove('invalidEmail');
		validEmail(email);
	}
}

function invalidEmail(input, message) {
	const emailControl = input.parentElement;
	const invalidEmailInput = emailControl.querySelector('.validation__txt');

	invalidEmailInput.innerHTML = message;

	emailControl.className = 'email__container invalid';
}

function validEmail(input) {
	const emailControl = input.parentElement;

	emailControl.className = 'email__container valid';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}
