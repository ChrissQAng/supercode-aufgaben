function pwCheck() {
  const passwordLength = document.body.querySelector("#password").value.length;
  const textOutput = document.body.querySelector(".output");
  console.log(passwordLength);
  textOutput.textContent =
    // const SaveOrNot =
    passwordLength < 8
      ? "The password is too short"
      : "Welcome to your Account";
}
