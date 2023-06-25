const form = document.querySelector('#signin');
const formSignin = document.querySelector('#signin__form');
const btnSignin = document.querySelector('#signin__btn');
const btnLogout = document.querySelector('#logout__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');

if (localStorage.getItem('id')) {
	signIn(localStorage.getItem('id'));
}

btnSignin.addEventListener('click', function (e) {
	e.preventDefault();
	const data = new FormData(formSignin);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	xhr.responseType = 'json';
	xhr.send(data);

	xhr.onload = () => {
		const responce = xhr.response;
		if (responce['success']) {
			const id = responce['user_id']
			localStorage.setItem('userId', id);
			signIn(id);
		} else {
			alert('неверный логин/пароль!')
		}
		formSignin.reset();
	}
})

function signIn(user) {
	form.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	userId.textContent = user;
}

btnLogout.addEventListener('click', () => {
	localStorage.clear();
	welcome.classList.remove('welcome_active');
	form.classList.add('signin_active');
})