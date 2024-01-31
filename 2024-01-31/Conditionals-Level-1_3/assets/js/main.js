function greaterThan(event) {
  event.preventDefault();
  const output = document.body.querySelector("form p");
  if (document.getElementById("input").value >= 18) {
    output.innerHTML = "Ja, Du kannst Shisha rauchen";
  } else {
    output.innerHTML = "Du darfst noch nicht Shisha rauchen";
  }
}
