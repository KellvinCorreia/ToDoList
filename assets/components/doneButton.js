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

export default DoneTaskButton