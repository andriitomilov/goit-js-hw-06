const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onCheckLengthOfInput);
inputRef.addEventListener("focus", onFocusRemoveClass);

function onCheckLengthOfInput(event) {
  const validLength = inputRef.dataset.length;
  const currentLength = event.currentTarget.value.length;

  if (currentLength === 0) {
    return;
  }

  inputRef.classList.add(currentLength > validLength ? "invalid" : "valid");
}

function onFocusRemoveClass() {
  inputRef.classList.remove("invalid");
  inputRef.classList.remove("valid");
}
