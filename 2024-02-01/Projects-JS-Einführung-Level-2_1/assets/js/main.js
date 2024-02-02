function text() {
  const textInput = document.body.querySelector(".text-input").value;
  const showText = document.body.querySelector(".text-output");
  const noText = document.body.querySelector(".no-message");
  showText.textContent = textInput;
  noText.textContent =
  textInput.length != 0 ? "" : "Gib bitte eine Nachricht ein!";
}
// showText.textContent = textInput.length === 0 ?