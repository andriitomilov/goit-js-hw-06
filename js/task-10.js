// 1. доступ до кнопок, поля вводу та поля створення елементів
const refs = {
  boxesContainer: document.querySelector("#boxes"),
  controlsContainer: document.querySelector("#controls"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
};
// вішаємо на кнопки слухача подій
refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
// функція створення елементів
function createBoxes() {
  const amount = refs.controlsContainer.firstElementChild.value;
  const elementsToAdd = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");

    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();

    elementsToAdd.push(divEl);
    refs.controlsContainer.firstElementChild.value = "";
  }

  refs.boxesContainer.append(...elementsToAdd);
  clearInputValue();
}

// функція очищення div id="boxes"
function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  clearInputValue();
}

// очищення поля ввода
function clearInputValue() {
  refs.controlsContainer.firstElementChild.value = "";
}

// функція отримання рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
