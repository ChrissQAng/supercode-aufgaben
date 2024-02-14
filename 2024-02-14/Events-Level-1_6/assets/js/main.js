// --- text output
const textOutput = document.querySelector(".text-output");
// --- value input
const selectInput = document.querySelector("#select-input");

// ---
selectInput.addEventListener("change", () => {
  textOutput.innerHTML = "Sie haben ausgewählt Select " + selectInput.value;
});
