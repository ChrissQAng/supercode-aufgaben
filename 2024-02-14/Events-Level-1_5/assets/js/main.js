const click = document.querySelector("#clickMe");
const clickOutput = document.querySelector("#clickMe");
let anzahl = 0;
click.addEventListener("click", () => {
  anzahl += 1;
  clickOutput.innerHTML = `Click me: ${anzahl}`;
});
