// --- get input number

const output = document.querySelector(".output-loop");
// --- function

const loopFunction = () => {
  const input = Number(document.querySelector("#number").value);
  if (input === 0) {
    output.innerHTML = `Mit 0 kann ich nichts anfangen!`;
    return;
  }
  let oString = [];
  if (input % 2 === 0) {
    for (i = 0; i < input; i++) {
      oString.push("o");
      const string = oString.join("");
      output.innerHTML = "<p>L" + string + "p</p>";
    }
  } else {
    console.log("ungerade");
    for (i = 0; i < input; i++) {
      // oString.push("o");
      if (i % 2 === 0) {
        oString.push("o");
      } else {
        oString.push("O");
      }
      const string = oString.join("");
      output.innerHTML = "<p>L" + string + "p</p>";
    }
  }
};
