const refs = {
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
  value: document.querySelector("#value"),
};
let counterValue = 0;

refs.decrement.addEventListener("click", onDecreaseValue);
refs.increment.addEventListener("click", onIncreaseValue);

function onDecreaseValue() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncreaseValue() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
