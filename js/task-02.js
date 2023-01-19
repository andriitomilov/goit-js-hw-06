const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");
listEl.append(...createItemsElements(ingredients));

function createItemsElements(ingredients) {
  const elements = ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");

    itemEl.classList.add("item");
    itemEl.textContent = ingredient;

    return itemEl;
  });

  return elements;
}
