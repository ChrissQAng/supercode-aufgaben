const list = document.body.children[0];
const output = document.body.children[3];

const firstButton = document.body.children[1].children[0];
const secondButton = document.body.children[1].children[2];
const thirdButton = document.body.children[1].children[4];
const fourButton = document.body.children[1].children[6];

firstButton.addEventListener("click", () => {
  output.innerHTML = list.firstElementChild.textContent;
});

secondButton.addEventListener("click", () => {
  output.innerHTML = list.lastElementChild.textContent;
});

thirdButton.addEventListener("click", () => {
  const first = list.firstElementChild;
  output.innerHTML = first.nextElementSibling.textContent;
});

fourButton.addEventListener("click", () => {
  let last = list.lastElementChild;
  output.innerHTML = last.previousElementSibling.textContent;
});
