function changeAir() {
  const air = Number(document.querySelector("#air").value);
  //   --- output: air-value
  const wrapper = document.querySelector(".wrapper");
  const airValue = document.querySelector(".value-air");
  // was NEUES!!!
  airValue.textContent = "Luftqualität: " + air;
  // airValue.innerHTML = air;

  //   --- output level
  const healthConcern = document.querySelector(".health-concern");
  const healthEffect = document.querySelector(".heath-effect");
  if (air <= 50) {
    wrapper.style.backgroundColor = "green";
    healthConcern.textContent = "Level of health concern: Good";
    healthEffect.textContent = "Level of health effects: Little or no risk";
  } else if (air <= 100 && air > 50) {
    wrapper.style.backgroundColor = "yellow";
    healthConcern.textContent = "Level of health concern: Moderate";
    healthEffect.textContent = "Level of health effects: Acceptable quality";
  } else if (air > 100 && air <= 150) {
    wrapper.style.backgroundColor = "orange";
    healthConcern.textContent =
      "Level of health concern: Unhealthy for sensitive groups";
    healthEffect.textContent =
      "Level of health effects: Generable publics not likely affected";
  } else {
    console.log("Fehler, Wert nicht innerhalb der Range!");
  }
}
