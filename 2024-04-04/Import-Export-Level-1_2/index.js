import { names, numbers } from "./data.js";
import {
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
} from "./function.js";

console.log(firstElement(names, numbers));

console.log(allButLast(names));
console.log(allButLast(numbers));

console.log(lastElement(names));
console.log(lastElement(numbers));

console.log(allButFirst(names));
console.log(allButFirst(numbers));

// console.log(removeElement(names));
console.log("removed Element" + removeElement(numbers, 8));

console.log(removeDuplicates(numbers));

console.log(addNumbers(numbers));

// without data array

console.log(randomNumberBetween(12, 25));

console.log(firstLetterUpperCase("ubuntu is good"));

console.log(strToUpperCase("hallo welt"));

console.log(checkLastLetter("hallo", "e"));
