//

const greyBtn = document.querySelector("#grauTaste");
const whiteBtn = document.querySelector("#weissTaste");
const blueBtn = document.querySelector("#blauTaste");
const yellowBtn = document.querySelector("#gelbTaste");

greyBtn.addEventListener("click", () => {
  console.log("da");
  document.body.style.backgroundColor = "gray";
});
whiteBtn.addEventListener("click", () => {
  console.log("da");
  document.body.style.backgroundColor = "white";
});
blueBtn.addEventListener("click", () => {
  console.log("da");
  document.body.style.backgroundColor = "blue";
});
yellowBtn.addEventListener("click", () => {
  console.log("da");
  document.body.style.backgroundColor = "yellow";
});
