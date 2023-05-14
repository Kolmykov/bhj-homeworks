const clickerStatus = document.querySelector('.clicker__status');
clickerStatus.innerHTML += '<br>Скорость кликов <span id="clicker__speed">0</span>';
const speed = document.getElementById('clicker__speed');
const clicker = document.getElementById('clicker__counter');

let clickCount = 0;
let clickTime = null;

cookie.onclick = function () {
	const currTime = new Date();
	clickCount++;
	clicker.innerHTML = clickCount;

	if (clickCount % 2) {
		cookie.width = '200';
	} else {
		cookie.width = '180';
	}

	if (clickTime) {
		const time = (currTime - clickTime) / 1000;
		const clickerSpeed = 1 / time;
		speed.innerHTML = clickerSpeed.toFixed(2);
	}
	clickTime = currTime;
}