function slice() {
  // 3 inputs
  const completeText = document.body.querySelector("#zeichenkette").value;
  const slicePoint = document.body.querySelector("#trennung").value;
  const beforeBtn = document.body.querySelector("#before").checked;
  //   const afterBtn = document.body.querySelector("#after").checked;
  //   console.log(completeText, slicePoint, beforeBtn);
  // 2 outputs
  const outputSlice1 = document.body.querySelector(".output-slice1");
  const outputSlice2 = document.body.querySelector(".output-slice2");
  //   Index of slice

  const slicePointIndex = completeText.indexOf(slicePoint);
  console.log(slicePointIndex);

  //   variable für slice1 und slice2 Before & After

  const slice1Before = completeText.slice(0, slicePointIndex);
  const slice2Before = completeText.slice(slicePointIndex);

  const slice1After = completeText.slice(
    0,
    slicePointIndex + slicePoint.length
  );
  const slice2After = completeText.slice(
    slicePointIndex + slicePoint.length,
    completeText.length
  );
  //   console.log(slice1, slice2);
  if (beforeBtn) {
    console.log("before");
    outputSlice1.textContent = slice1Before;
    outputSlice2.textContent = slice2Before;
  } else {
    outputSlice1.textContent = slice1After;
    outputSlice2.textContent = slice2After;
    console.log("after");
  }
}
