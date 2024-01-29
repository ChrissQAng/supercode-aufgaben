function getAge(event) {
  event.preventDefault();
  const birth = document.querySelector("#birthDate").value;
  const age = 2024 - birth;
  const ageOutput = document.querySelector(".output-form");
  ageOutput.innerHTML = "Du bist " + age + " Jahre alt!";
}
