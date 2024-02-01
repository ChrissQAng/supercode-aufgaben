function pwCheck() {
  getPassword = document.body.querySelector("#password").value;
  const textOutput = document.body.querySelector(".output");
  const passwordLength = `${getPassword.length}`;
  console.log(passwordLength);
  const SaveOrNot =
    passwordLength < 8
      ? (textOutput.textContent = "The password is too short")
      : (textOutput.textContent = "Welcome to your Account");
}
