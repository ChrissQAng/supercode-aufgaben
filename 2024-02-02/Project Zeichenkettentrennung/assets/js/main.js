// ----------- if/else AND ternary SOLUTION

function slice() {
  // --- 3 inputs
  const completeText = document.body.querySelector("#zeichenkette").value;
  const sliceString = document.body.querySelector("#trennung").value;
  const beforeBtn = document.body.querySelector("#before").checked;

  // --- 2 outputs
  const outputSlice1 = document.body.querySelector(".output-slice1");
  const outputSlice2 = document.body.querySelector(".output-slice2");

  // --- FALSE input validation (empty string or no radio button chosen)
  if (completeText === "" || sliceString === "") {
    alert("Gib in die Felder JEWEILS einen Text ein!");
    return;
  }
  if (
    beforeBtn === false &&
    document.body.querySelector("#after").checked === false
  ) {
    alert("Wähle eine Trennungoption !");
    return;
  }

  // --- index of slice stringstart
  const indexSliceStringStart = completeText.indexOf(sliceString);

  // --- FALSE input validation (sliceString not in completeText included)
  if (indexSliceStringStart === -1) {
    alert("Trennung ist NICHT in der ursprünglichen Zeichenkette enthalte!");
    return;
  }

  // --------------------------------------------------------------
  // -------- alternative with ternary ----------------------------
  // --------------------------------------------------------------

  // --- index of slice string end
  const indexSliceStringEnd = indexSliceStringStart + sliceString.length;

  // --- variable für slice1 und slice2 Before & After
  // const slice1Before = completeText.slice(0, indexSliceStringStart);
  // const slice2Before = completeText.slice(indexSliceStringStart);

  // const slice1After = completeText.slice(0, indexSliceStringEnd);
  // const slice2After = completeText.slice(
  //   indexSliceStringEnd,
  //   completeText.length
  // );

  // --- outputs
  // outputSlice1.textContent = beforeBtn ? slice1Before : slice1After;
  // outputSlice2.textContent = beforeBtn ? slice2Before : slice2After;

  // ---------------------------------------------------------------
  // ---------------- if/else solution------------------------------
  // ---------------------------------------------------------------

  if (beforeBtn) {
    outputSlice1.textContent = completeText.slice(0, indexSliceStringStart);
    outputSlice2.textContent = completeText.slice(indexSliceStringStart);
  } else {
    outputSlice1.textContent = completeText.slice(0, indexSliceStringEnd);
    outputSlice2.textContent = completeText.slice(
      indexSliceStringEnd,
      completeText.length
    );
  }
}
