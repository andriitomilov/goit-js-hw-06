const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onCheckLengthOfInput);
inputRef.addEventListener("focus", onFocusRemoveClass);

function onCheckLengthOfInput(event) {
  const validLength = Number(inputRef.dataset.length);
  const currentLength = event.currentTarget.value.length;

  console.log(typeof validLength, typeof currentLength);

  if (currentLength === 0) {
    return;
  }

  inputRef.classList.add(currentLength === validLength ? "valid" : "invalid");
}

function onFocusRemoveClass() {
  inputRef.classList.remove("invalid");
  inputRef.classList.remove("valid");
}
