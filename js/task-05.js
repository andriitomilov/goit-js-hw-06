const refs = {
    inputField: document.querySelector('#name-input'),
    outputField: document.querySelector('#name-output'),
}

refs.inputField.addEventListener('input', onChangeOutputField);

function onChangeOutputField(event) {
    const isEmptyField = event.currentTarget.value === "";
    
    refs.outputField.textContent = isEmptyField
      ? "Anonymous"
      : event.currentTarget.value;

}