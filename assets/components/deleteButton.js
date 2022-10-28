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

export default DeleteTaskButton