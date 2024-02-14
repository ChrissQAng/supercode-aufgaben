let numArr = [5, 22, 15, 100, 55];
const trueResult = document.querySelector(".output-result");

for (let i = 0; i < numArr.length; i++) {
  for (let j = 2; j < numArr[i]; j++) {
    if (numArr[i] % j === 0) {
      trueResult.innerHTML += `<p>${
        numArr[i]
      } is divisable by ${j}. The result is ${numArr[i] / j}`;
    }
  }
}
