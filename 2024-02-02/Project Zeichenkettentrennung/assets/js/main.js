function slice() {
  // 3 inputs
  const completeText = document.body.querySelector("#zeichenkette").value;
  const slicePoint = document.body.querySelector("#trennung").value;
  const beforeBtn = document.body.querySelector("#before").checked;
  //   const afterBtn = document.body.querySelector("#after").checked;
  console.log(completeText, slicePoint, beforeBtn);
  // 2 outputs
  const outputSlice1 = document.body.querySelector(".output-slice1");
  const outputSlice2 = document.body.querySelector(".output-slice2");
  //   variable für slice1 und slice2
  const slice1 = completeText.slice(0, completeText.indexOf(slicePoint));
  const slice2 = completeText.slice(completeText.indexOf(slicePoint));
  //   console.log(slice1, slice2);
  if (beforeBtn) {
    console.log("before");
    outputSlice1.textContent = slice1;
    outputSlice2.textContent = slice2;
  } else {
    outputSlice1.textContent = slice2;
    outputSlice2.textContent = slice1;
    console.log("after");
  }
}
