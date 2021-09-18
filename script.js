const form = document.querySelector('form');
const email = document.querySelector('input[type=email]');
const errorSvg = document.querySelector('.error-svg');
const msg = document.querySelector('.msg');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let emailValue = email.value;
	console.log(email.value);
	if (validateEmail(emailValue)) {
		errorSvg.classList.remove('show');
        msg.classList.remove('show');
	} else {
		errorSvg.classList.add('show');
        msg.classList.add('show');
	}
});

function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}