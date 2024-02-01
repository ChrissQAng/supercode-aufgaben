function showtxt() {
  const getValue = document.body.querySelector("#mylist").value;
  console.log(getValue);
  const outputSize = document.body.querySelector("td");
  switch (getValue) {
    case "0":
      //   console.log("case0");
      outputSize.innerHTML = `<b>Brief und Postkarte</b> <br>
    L: 10 - 23,5 cm
    B: 7 - 12,5 cm
    H: bis 1 cm`;
  }
}
