// function changeBackground() {
//   const red = document.querySelector("#red").value;
//   const green = document.querySelector("#green").value;
//   const blue = document.querySelector("#blue").value;
//   const valueRGB = `rgb(${red},${green},${blue})`;
//   const wrapper = document.querySelector(".wrapper");
//   wrapper.style.backgroundColor = valueRGB;
//   // implement values
//   const valueRed = document.querySelector(".valueRed");
//   valueRed.innerHTML = red;
//   const valueGreen = document.querySelector(".valueGreen");
//   valueGreen.innerHTML = green;
//   const valueBlue = document.querySelector(".valueBlue");
//   valueBlue.innerHTML = blue;
// }
function changeAir() {
  const air = document.querySelector("#air").value;
  //   --- output: air-value
  const wrapper = document.querySelector(".wrapper");
  const airValue = document.querySelector(".value-air");
  airValue.innerHTML = air;
  //   --- output level
  const healthConcern = document.querySelector(".health-concern");
  const healthEffect = document.querySelector(".heath-effect");
  if (air <= 50) {
    wrapper.style.backgroundColor = "green";
    healthConcern.innerHTML = "Level of health concern: Good";
    healthEffect.innerHTML = "Level of health effects: Little or no risk";
  } else if (air <= 100) {
    wrapper.style.backgroundColor = "yellow";
    healthConcern.innerHTML = "Level of health concern: Moderate";
    healthEffect.innerHTML = "Level of health effects: Acceptable quality";
  } else {
    wrapper.style.backgroundColor = "orange";
    healthConcern.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    healthEffect.innerHTML =
      "Level of health effects: Generable publics not likely affected";
  }
}
