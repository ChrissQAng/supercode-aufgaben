const A = "Susi is going to codingschool";

const text1 = A.slice(0, 4);
const text2 = A.slice(5, 7);
const text3 = A.slice(5, 17).concat(A.slice(-6));
const text4 = A.slice(-6);
const text5 = A.slice(0, 8).concat(A.slice(-6));

// Ausgabe im HTML

// wie schaffe ich neue Zeilen?
// function output() {
//   console.log(text1);
//   const outputHtml = document.body.querySelector(".textslice");
//   outputHtml.textContent = text1;
//   outputHtml.textContent += text2;
//   outputHtml.textContent += text3;
//   outputHtml.textContent += text4;
//   outputHtml.textContent += text5;
// }

// output();
const outputHtml = document.querySelector(".textslice");

outputHtml.innerHTML = `<h2> ${text1} </h2>`;
outputHtml.innerHTML += `<h2> ${text2} </h2>`;
outputHtml.innerHTML += `<h2> ${text3} </h2>`;
outputHtml.innerHTML += `<h2> ${text4} </h2>`;
outputHtml.innerHTML += `<h2> ${text5} </h2>`;
