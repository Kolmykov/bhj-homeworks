const modal = document.querySelector('#subscribe-modal');
const modalClose = document.querySelector('.modal__close');

window.onload = () => {
	if (!getCookie('closed')) {
		modal.classList.add('modal_active');
	}
}

modalClose.onclick = () => {
	modal.classList.remove('modal_active');
	document.cookie = 'closed=true';
}

function getCookie(item) {
	const pars = document.cookie.split('; ');
	const cookie = pars.find(e => e.startsWith(item + '='));
	if (cookie) {
		return cookie.slice(item.length + 1);
	}
}