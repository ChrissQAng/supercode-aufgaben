const firstElement = (arrayNames, arrayNumbers) => {
  //   arrayNumbers[0];
  return arrayNames[0] + "\n" + arrayNumbers[0];
};

const allButLast = (array) => array.slice(0, array.length - 1);

const lastElement = (array) => array[array.length - 1];

const allButFirst = (array) => array.slice(1, array.length);

// const removedElement = "Simon";
// const removedElement = 8;
const removeElement = (array, removedElement) =>
  array.filter((item) => item !== removedElement);

const removeDuplicates = (array) =>
  array.filter((item, pos) => array.indexOf(item) == pos);

const addNumbers = (array) =>
  array.reduce((partialSum, a) => partialSum + a, 0);

//   without data array

const randomNumberBetween = (a, b) => Math.round(Math.random() * (b - a) + a);

const firstLetterUpperCase = (string) =>
  string[0].toUpperCase() + string.slice(1);

const strToUpperCase = (str) => str.toUpperCase();

const checkLastLetter = (str, a) => {
  if (str.slice(-1) == a) {
    return console.log("letzter Buchsatbe identisch");
  } else {
    return console.log("letzter Buchstabe nicht identisch");
  }
};
export {
  firstElement,
  allButLast,
  lastElement,
  allButFirst,
  removeElement,
  removeDuplicates,
  addNumbers,
  randomNumberBetween,
  firstLetterUpperCase,
  strToUpperCase,
  checkLastLetter,
};
