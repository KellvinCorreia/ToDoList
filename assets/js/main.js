let dataButton = document.querySelector('[data-form-button]')
let dataInput = document.querySelector('[data-form-input]')
dataButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (dataInput.value) {
    console.log(dataInput.value);
  }
})