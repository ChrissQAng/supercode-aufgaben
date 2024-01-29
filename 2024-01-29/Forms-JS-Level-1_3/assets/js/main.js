function compareAge(event) {
  event.preventDefault();
  const age1 = document.querySelector("#alter1").value;
  const age2 = document.querySelector("#alter2").value;
  const ageDifferece = age1 - age2;
  const ageOutput = document.querySelector(".output-form");
  ageOutput.innerHTML = "Die Differenz ist: " + ageDifferece + " Jahre.";
}
