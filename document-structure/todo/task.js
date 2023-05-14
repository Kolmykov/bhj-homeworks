const tForm = document.querySelector('#tasks__form');
const tInput = document.querySelector('.tasks__input');
const tList = document.querySelector('.tasks__list');

tForm.addEventListener('submit', tasksAdd);
tList.addEventListener('click', taskRemove);

if (localStorage.getItem('tasks')) {
	tList.innerHTML = localStorage.getItem('tasks');
}

function tasksAdd(e) {
	e.preventDefault();
	const taskText = tInput.value;
	const taskHTML =
		`<div class="task">
		<div class="task__title">${taskText}</div>
		<a href="#" class="task__remove">&times;</a>
		</div>`;
	if (tInput.value) tList.insertAdjacentHTML('beforeend', taskHTML);
	tInput.value = '';
	tInput.focus();
	saveTasks();
}

function taskRemove(e) {
	e.preventDefault();
	const btn = e.target;
	if (btn.classList.contains('task__remove')) {
		const parent = btn.closest('.task');
		parent.remove();
	}
	saveTasks();
}

function saveTasks() {
	localStorage.setItem('tasks', tList.innerHTML);
}