const refs = {
  btn: document.querySelector(".change-color"),
  text: document.querySelector(".color"),
};

refs.btn.addEventListener("click", onChangeBackgroundColor);

function onChangeBackgroundColor() {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  refs.text.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
