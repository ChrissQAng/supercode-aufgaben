// --- fire bouth functions

const fireOtherFunctions = () => {
  changeText();
  calculate();
};

// --- function to change text
const changeText = () => {
  const nettoToBruttoChecked = document.body.querySelector("#netto-id").checked;
  const chaingeAmount = document.body.querySelector(".text-input-amount");
  const chaingeOutputAmount = document.body.querySelector(
    ".text-output-amount"
  );
  if (!nettoToBruttoChecked) {
    chaingeAmount.textContent =
      "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
    chaingeOutputAmount.textContent = "Nettobetrag";
  } else {
    chaingeAmount.textContent =
      "Nettobetrag (Preis ohne Mehrwertssteuer) in Euro";
    chaingeOutputAmount.textContent = "Bruttobetrag (Endpreis)";
  }
};

// --- function to start calculation
const calculate = () => {
  // --- inputs
  const nettoToBruttoChecked = document.body.querySelector("#netto-id").checked;
  const tax19Checked = document.body.querySelector(
    "#neunzeh-prozent-id"
  ).checked;
  const euroValue = Number(document.body.querySelector("#euro-value").value);

  // --- outputs
  const taxOutput = document.body.querySelector(".output-mehrwertsteuer");
  const valueOutput = document.body.querySelector(".output-netto-or-brutto");

  // --- tax rate
  const taxRate = tax19Checked ? 0.19 : 0.07;

  // --- netto to brutto
  //   let taxCalc = taxRate / 100 + 1;
  //   if (!nettoToBruttoChecked) {
  //     taxCalc = taxCalc
  //   }
  //   const brutto = euroValue * taxCalc;
  //   const taxAmount = brutto - euroValue;

  //   --- calculate and output

  if (nettoToBruttoChecked) {
    const euroAmount = euroValue * (1 + taxRate);
    const taxAmount = euroAmount - euroValue;
    console.log({ euroAmount }, { taxAmount });
    valueOutput.textContent = `€ ${euroAmount.toFixed(2)}`;
    taxOutput.textContent = `€ ${taxAmount.toFixed(2)}`;
  } else {
    const euroAmount = euroValue / (1 + taxRate);
    const taxAmount = euroValue - euroAmount;
    console.log({ euroAmount }, { taxAmount });
    valueOutput.textContent = `€ ${euroAmount.toFixed(2)}`;
    taxOutput.textContent = `€ ${taxAmount.toFixed(2)}`;
  }
};
