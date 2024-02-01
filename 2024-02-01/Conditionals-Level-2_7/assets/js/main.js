function showtxt() {
  const getValue = document.body.querySelector("#mylist").value;

  const outputSize = document.body.querySelector("td");
  switch (getValue) {
    case "0":
      outputSize.innerHTML = `<b>Brief und Postkarte</b> <br>
      L: 10 - 23,5 cm
      B: 7 - 12,5 cm
      H: bis 1 cm`;
      console.log("case 0");
      break;
    case "1":
      outputSize.innerHTML = `<b>DHL Paket 2 kg</b> <br>
      bis 60 x 30 x 15 cm`;
      break;
    case "2":
      outputSize.innerHTML = `<b>DHL Paket 5 kg</b> <br>
      bis 120 x 60 x 60 cm`;
      break;
    case "3":
      outputSize.innerHTML = `<b>DHL Paket 10 kg</b> <br>
      bis 120 x 60 x 60 cm`;
      break;
    default:
      outputSize.innerHTML = `<b>Extra große Größe</b>`;
      break;
  }
}
