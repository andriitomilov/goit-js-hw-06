const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.text.style.fontSize = `${refs.input.value}px`;
refs.input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  const fontSize = event.currentTarget.value;

  refs.text.style.fontSize = `${fontSize}px`;
}
