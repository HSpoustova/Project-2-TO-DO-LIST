const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addButton = document.getElementById('button_add');
const deleteButton = document.querySelector('.button_delete');

let tasks = [];

const addTask = () => {
  const text = taskInput.value.trim();
  if (text === '') return;

  tasks.push({ text, done: false });
  saveTasks();
  renderTasks();

  taskInput.value = '';
};

taskList.addEventListener('click', (event) => {
  const clicked = event.target;
  const li = clicked.closest('li');
  const index = Number(li.dataset.index);

  if (clicked.classList.contains('button_delete')) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
    return;
  }

  tasks[index].done = !tasks[index].done;
  saveTasks();
  renderTasks();
});

const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const loadTasks = () => {
  const stored = localStorage.getItem('tasks');
  if (stored) {
    tasks = JSON.parse(stored);
  }
};

const renderTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.done) li.classList.add('done');

    li.innerHTML = `<span> ${task.text} </span>
  <button type="button" class="button_delete">🗑</button>`;

    li.dataset.index = index;
    taskList.appendChild(li);
  });
};

const saveTask = addButton.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

loadTasks();
renderTasks();
