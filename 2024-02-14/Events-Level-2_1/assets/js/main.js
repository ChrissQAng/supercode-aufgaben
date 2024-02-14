//

const greyBtn = document.querySelector("#grauTaste");
const whiteBtn = document.querySelector("#weissTaste");
const blueBtn = document.querySelector("#blauTaste");
const yellowBtn = document.querySelector("#gelbTaste");

greyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "gray";
});
whiteBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "white";
});
blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});
yellowBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
});
