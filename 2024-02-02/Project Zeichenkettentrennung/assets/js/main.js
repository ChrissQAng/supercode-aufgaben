// ----------------------------- if-else

// function slice() {
//   // 3 inputs
//   const completeText = document.body.querySelector("#zeichenkette").value;
//   const sliceString = document.body.querySelector("#trennung").value;
//   const beforeBtn = document.body.querySelector("#before").checked;
//   //   const afterBtn = document.body.querySelector("#after").checked;
//   //   console.log(completeText, sliceString, beforeBtn);

//   // 2 outputs
//   const outputSlice1 = document.body.querySelector(".output-slice1");
//   const outputSlice2 = document.body.querySelector(".output-slice2");

//   //   Index of slice start

//   const indexSliceStringStart = completeText.indexOf(sliceString);
//   console.log(indexSliceStringStart);

//   // Index of slice string end

//   const indexSliceStringEnd = indexSliceStringStart + sliceString.length;

//   //   variable für slice1 und slice2 Before & After

//   const slice1Before = completeText.slice(0, indexSliceStringStart);
//   const slice2Before = completeText.slice(indexSliceStringStart);

//   const slice1After = completeText.slice(0, indexSliceStringEnd);
//   const slice2After = completeText.slice(
//     indexSliceStringEnd,
//     completeText.length
//   );
//   //   output of 4 variables

//   if (beforeBtn) {
//     console.log("before");
//     outputSlice1.textContent = slice1Before;
//     outputSlice2.textContent = slice2Before;
//   }
//   else {
//     outputSlice1.textContent = slice1After;
//     outputSlice2.textContent = slice2After;
//     console.log("after");
//   }
// }
// ----------------------------------- ternary

function slice() {
  // --- 3 inputs
  const completeText = document.body.querySelector("#zeichenkette").value;
  const sliceString = document.body.querySelector("#trennung").value;
  const beforeBtn = document.body.querySelector("#before").checked;

  // --- 2 outputs
  const outputSlice1 = document.body.querySelector(".output-slice1");
  const outputSlice2 = document.body.querySelector(".output-slice2");

  // --- index of slice start

  const indexSliceStringStart = completeText.indexOf(sliceString);
  console.log(indexSliceStringStart);

  // --- index of slice string end

  const indexSliceStringEnd = indexSliceStringStart + sliceString.length;

  // --- variable für slice1 und slice2 Before & After

  const slice1Before = completeText.slice(0, indexSliceStringStart);
  const slice2Before = completeText.slice(indexSliceStringStart);

  const slice1After = completeText.slice(0, indexSliceStringEnd);
  const slice2After = completeText.slice(
    indexSliceStringEnd,
    completeText.length
  );
  //   output of 4 variables

  // if (beforeBtn) {
  //   console.log("before");
  //   outputSlice1.textContent = slice1Before;
  //   outputSlice2.textContent = slice2Before;
  // }
  // else {
  //   outputSlice1.textContent = slice1After;
  //   outputSlice2.textContent = slice2After;
  //   console.log("after");
  // }
  outputSlice1.textContent = beforeBtn ? slice1Before : slice1After;
  outputSlice2.textContent = beforeBtn ? slice2Before : slice2After;
}
