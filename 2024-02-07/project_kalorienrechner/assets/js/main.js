// outputs

const outGrundumsatz = document.querySelector(".grundumsatz");
const outGesamtumsatz = document.querySelector(".gesamtumsatz");

const calculate = (event) => {
  event.preventDefault();
  console.log("hallo");
  //   --- inputs

  const inputHeight = Number(document.querySelector("#height").value);
  const inputAge = Number(document.querySelector("#age").value);
  const inputWeight = Number(document.querySelector("#weight").value);
  const inputFemaleChecked = document.querySelector("#female").checked;
  const inputStressFactor = Number(document.querySelector("#bodystress").value);

  console.log(
    { inputHeight },
    { inputAge },
    { inputWeight },
    { inputFemaleChecked },
    { inputStressFactor }
  );
  if (inputFemaleChecked) {
    const grundumsatzErgebnis =
      655.1 + 9.6 * inputWeight + 1.8 * inputHeight - 4.7 * inputAge;
    outGrundumsatz.innerHTML = grundumsatzErgebnis.toFixed(1);
    outGesamtumsatz.innerHTML = (
      grundumsatzErgebnis * inputStressFactor
    ).toFixed(1);
  } else {
    const grundumsatzErgebnis =
      66.47 + 13.7 * inputWeight + 5 * inputHeight - 6.8 * inputAge;
    outGrundumsatz.innerHTML = grundumsatzErgebnis.toFixed(1);
    outGesamtumsatz.innerHTML = (
      grundumsatzErgebnis * inputStressFactor
    ).toFixed(1);
  }
};
