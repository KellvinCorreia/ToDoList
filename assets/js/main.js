import DoneTaskButton from '../components/doneButton.js';
import DeleteTaskButton from '../components/deleteButton.js';

const dataButton = document.querySelector('[data-form-button]');

const handleNewItem = event => {
  event.preventDefault();
  const dataInput = document.querySelector('[data-form-input]');
  const dataInputValue = dataInput.value;
  const dataList = document.querySelector('[data-list]');
  const calendar = document.querySelector('[data-form-date]');

  moment.locale('pt-br');
  const calendarDate = moment(calendar.value);
  const formatedDate = calendarDate.format('LLL');

  const settings = {
    dataInputValue,
    formatedDate
  }
  
  dataList.appendChild(createTask(settings));
  dataInput.value = '';
  dataInput.focus();

};

const createTask = ({ dataInputValue, formatedDate }) => {
  const task = document.createElement('li');
  let content = `<p class="content">${formatedDate} | ${dataInputValue}</p>`;
  task.innerHTML = content;
  task.classList.add('task');
  task.appendChild(DoneTaskButton());
  task.appendChild(DeleteTaskButton());
  return task;
};


dataButton.addEventListener('click', handleNewItem);
