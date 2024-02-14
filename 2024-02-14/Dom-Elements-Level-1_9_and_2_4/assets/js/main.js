const selectMenu = document.querySelector("#farbeAuswahlen");
const removeColor = document.querySelector("#button");

// --- Dom-Elements-Level-1_9 (remove color from menue)

// removeColor.addEventListener("click", (event) => {
//   event.preventDefault();
//   selectMenu.remove(selectMenu.selectedIndex);
// });

// --- Dom-Elements-Level-2_4 (change background color)

removeColor.addEventListener("click", (event) => {
  event.preventDefault();
  // let color = selectMenu.value.toLowerCase().replaceAll(" ", "");
  document.body.style.backgroundColor = selectMenu.value
    .toLowerCase()
    .replaceAll(" ", "");
  // selectMenu.;
});
