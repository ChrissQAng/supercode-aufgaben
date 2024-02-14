// const removeBtn = document.querySelector("#button");
// const removeColor = document.querySelector("#farbeAuswahlen");
// let index = 0;

// removeColor.addEventListener("change", () => {
//   index = removeColor.selectedIndex;
//   console.log({ index });
// });
// removeBtn.addEventListener("click", () => {
//   console.log(index);
//   removeColor.remove(index);
// });

const selectMenu = document.querySelector("#farbeAuswahlen");
const removeColor = document.querySelector("#button");
let index = 0;

selectMenu.addEventListener("change", () => {
  index = selectMenu.selectedIndex;
});

removeColor.addEventListener("click", () => {
  selectMenu.remove(index);
});
