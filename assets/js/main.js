import DoneTaskButton from '../components/doneButton.js'
import DeleteTaskButton from '../components/deleteButton.js';

const dataButton = document.querySelector('[data-form-button]');

const createTask = event => {
  const dataInput = document.querySelector('[data-form-input]');
  const dataList = document.querySelector('[data-list]');
  event.preventDefault();
  if (dataInput.value) {
    const task = document.createElement('li');
    let content = `<p class="content">${dataInput.value}</p>`;
    task.innerHTML = content;
    task.classList.add('task');
    dataList.appendChild(task);
    task.appendChild(DoneTaskButton());
    task.appendChild(DeleteTaskButton());
    dataInput.value = '';
    dataInput.focus();
  }
};
dataButton.addEventListener('click', createTask);
