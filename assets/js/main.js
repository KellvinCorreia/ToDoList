const dataButton = document.querySelector('[data-form-button]');
const dataInput = document.querySelector('[data-form-input]');
const dataList = document.querySelector('[data-list]');

const createTask = event => {
  event.preventDefault();
  if (dataInput.value) {
    const task = document.createElement('li');
    let content = `<p class="content">${dataInput.value}</p>`;
    task.innerHTML = content;
    task.classList.add('task');
    dataList.appendChild(task);
    dataInput.value = ''
    dataInput.focus()
  }
};
dataButton.addEventListener('click', createTask);
