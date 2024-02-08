let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

// ---- in einer Funktion, wie in der Aufgabe (nicht von mir!)

// const sortDopple = (param) => {
//   const doppleArray = param.map((x) => x * 2);

//   doppleArray.sort((a, b) => a - b);
//   return doppleArray;
// };
// console.log(sortDopple(array));

// mit einer Zwischenvariable (von mir!)
array.sort((a, b) => a - b);
const newArray = array.map((dopple) => dopple * 2);
console.log(newArray);
