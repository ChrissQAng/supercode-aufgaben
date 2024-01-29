function changeBackground() {
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;
  const valueRGB = `rgb(${red},${green},${blue})`;
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.backgroundColor = valueRGB;
  // implement values
  const valueRed = document.querySelector(".valueRed");
  valueRed.innerHTML = red;
  const valueGreen = document.querySelector(".valueGreen");
  valueGreen.innerHTML = green;
  const valueBlue = document.querySelector(".valueBlue");
  valueBlue.innerHTML = blue;
}
