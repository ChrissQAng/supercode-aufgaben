function text() {
  const textInput = document.body.querySelector(".text-input").value;
  const showText = document.body.querySelector(".text-output");
  const noText = document.body.querySelector(".no-message");
  const textOuput =
    textInput.length != 0
      ? (showText.textContent = textInput)
      : (noText.textContent = "Gib bitte eine Nachricht ein!");
}
