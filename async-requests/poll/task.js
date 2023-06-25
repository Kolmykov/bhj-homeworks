const poll = document.querySelector('#poll');
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		const poll = JSON.parse(xhr.responseText);
		pollTitle.innerText = poll.data.title;

		let btnHTML = '';
		for (let i = 0; i < poll.data.answers.length; i++) {
			btnHTML += '<button class="poll__answer">' + poll.data.answers[i] + '</button>';
			pollAnswers.innerHTML = btnHTML;
		}
		const btns = document.querySelectorAll('.poll__answer')
		for (btn of btns) {
			btn.addEventListener('click', () => {
				alert('Спасибо, ваш голос засчитан!')
			})
		}
	}
})
xhr.send();