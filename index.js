const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('button_add');
const deleteButton = document.querySelector('.button_delete');

const AddTask = () => {
  const text = taskInput.value.trim();

  if (text === '') {
    return;
  }

  const li = document.createElement('li');

  li.innerHTML = `<span> ${text} </span>
  <button type="button" class="button_delete">🗑</button>`;

  taskList.appendChild(li);
  taskInput.value = '';
};

taskList.addEventListener('click', (event) => {
  const clicked = event.target;

  if (clicked.classList.contains('button_delete')) {
    clicked.closest('li').remove();
    return;
  }

  clicked.closest('li').classList.toggle('done');
});

addButton.addEventListener('click', AddTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    AddTask();
  }
});
