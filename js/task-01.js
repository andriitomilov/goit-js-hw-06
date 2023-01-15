const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);
calculateCNumberOfCatagories(categories);

function calculateCNumberOfCatagories(categories) {
  categories.forEach((category) => {
    const titleEl = category.querySelector("h2");
    const listEl = category.querySelectorAll("li");

    console.log(`Category: ${titleEl.textContent}`);
    console.log(`Elements: ${listEl.length}`);
  });
}