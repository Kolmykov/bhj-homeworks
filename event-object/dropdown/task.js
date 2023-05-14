const dropdown = document.querySelector('.dropdown');
const list = document.querySelector('.dropdown__list');
const value = document.querySelector('.dropdown__value');

const link = Array.from(document.querySelectorAll('.dropdown__link'));

dropdown.addEventListener('click', (event) => {
	list.classList.toggle('dropdown__list_active');
});

for (let i = 0; i < link.length; i++) {
	link[i].onclick = () => {
		value.closest('div').textContent = link[i].textContent;
		return false;
	}
}