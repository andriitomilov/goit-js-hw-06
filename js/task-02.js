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
  const elements = ingredients.map((ingredients) => {
    const itemEl = document.createElement("li");

    itemEl.classList.add("item");
    itemEl.textContent = ingredients;

    return itemEl;
  });

  return elements;
}
