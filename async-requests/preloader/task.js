const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');
		const response = JSON.parse(xhr.response);
		const valutes = response['response']['Valute'];

		for (val in valutes) {
			const codeItem = valutes[val]['CharCode'];
			const valueItem = valutes[val]['Value'];
			const valueHTML =
				`<div class="item">
					<div class="item__code">${codeItem}</div>
					<div class="item__value">${valueItem}</div>
					<div class="item__currency">руб.</div>
				</div>`;
			items.insertAdjacentHTML('beforeend', valueHTML);
		}
	}
})