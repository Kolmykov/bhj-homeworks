const editor = document.querySelector('#editor');
const clear = document.querySelector('#reset');

editor.value = localStorage.getItem('text');
editor.addEventListener('input', () => {
	saveText(editor.value);
})

clear.onclick = () => {
	editor.value = '';
	saveText(editor.value);
}

function saveText(value) {
	localStorage.setItem('text', value);
}