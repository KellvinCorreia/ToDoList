(() => {
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
    task.appendChild(DeleteTaskButton())
    dataInput.value = '';
    dataInput.focus();
  }
};
dataButton.addEventListener('click', createTask);

const DoneTaskButton = () => {
  const doneButton = document.createElement('button');
  doneButton.classList.add('check-button');
  doneButton.innerText = 'Concluir';
  doneButton.addEventListener('click', DoneTarget);
  return doneButton;
};
const DoneTarget = (event) => {
  const doneButton = event.target;
  const doneParent = doneButton.parentElement;
  doneParent.classList.toggle('done');
}

const DeleteTaskButton = () => {
  const deleteButton = document.createElement('button')
  deleteButton.classList.add('delete-button')
  deleteButton.innerText = 'Excluir'
  deleteButton.addEventListener('click', DeleteTarget)
  return deleteButton
}

const DeleteTarget = (event) => {
  const deleteButton = event.target
  const deleteParent = deleteButton.parentElement
  deleteParent.remove()
}
})()