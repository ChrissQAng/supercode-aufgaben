// --- output

const output = document.querySelector(".output-loop");
// --- function

const loopFunction = () => {
  const input = Number(document.querySelector("#number").value);
  let oString = [];

  for (i = 0; i < input; i++) {
    oString.push("o");
  }
  const string = oString.join("");
  output.innerHTML = "<p>L" + string + "p</p>";
};
