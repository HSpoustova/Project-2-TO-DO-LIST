const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('button_add');

const AddTask = () => {
  const text = taskInput.value.trim();

  if (text === '') {
    return;
  }

  const li = document.createElement('li');

  li.innerHTML = `<span> ${text} </span>
  <button class="button_delete">🗑</button>`;

  taskList.appendChild(li);
  taskInput.value = '';
};

addButton.addEventListener('click', AddTask);
taskInput.addEventListener('keydown', (e) => {
  if (event.key === 'Enter') {
    AddTask();
  }
});
