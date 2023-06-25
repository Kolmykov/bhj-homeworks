const progress = document.querySelector('#progress');
const form = document.querySelector('#form');
const send = document.querySelector('#send');

send.addEventListener('click', function (e) {
	e.preventDefault();
	const data = new FormData(form);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	xhr.upload.onprogress = (e) => {
		progress.value = e.loaded / e.total;
	}
	xhr.send(data);
})