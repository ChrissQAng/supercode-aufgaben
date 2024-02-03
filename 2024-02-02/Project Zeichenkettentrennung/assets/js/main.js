function slice() {
  // 3 inputs
  const completeText = document.body.querySelector("#zeichenkette").value;
  const sliceString = document.body.querySelector("#trennung").value;
  const beforeBtn = document.body.querySelector("#before").checked;
  //   const afterBtn = document.body.querySelector("#after").checked;
  //   console.log(completeText, sliceString, beforeBtn);

  // 2 outputs
  const outputSlice1 = document.body.querySelector(".output-slice1");
  const outputSlice2 = document.body.querySelector(".output-slice2");

  //   Index of slice start

  const indexSliceStringStart = completeText.indexOf(sliceString);
  console.log(indexSliceStringStart);

  // Index of slice string end

  const indexSliceStringEnd = indexSliceStringStart + sliceString.length;

  //   variable für slice1 und slice2 Before & After

  const slice1Before = completeText.slice(0, indexSliceStringStart);
  const slice2Before = completeText.slice(indexSliceStringStart);

  const slice1After = completeText.slice(0, indexSliceStringEnd);
  const slice2After = completeText.slice(
    indexSliceStringEnd,
    completeText.length
  );
  //   console.log(slice1, slice2);

  if (beforeBtn) {
    console.log("before");
    outputSlice1.textContent = slice1Before;
    outputSlice2.textContent = slice2Before;
  }
  // else if (completeText === "" || sliceString === "") {
  //   outputSlice1 = "Gib jeweils etwas in die die beiden Felder ein!";
  //   return;
  // }
  else {
    outputSlice1.textContent = slice1After;
    outputSlice2.textContent = slice2After;
    console.log("after");
  }
}
