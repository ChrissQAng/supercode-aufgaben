let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

// --- Array-Sort-Level-1_1

console.log(languages);
const sortierung = () => {
  return languages.sort();
};
console.log(sortierung());

// --- Array-Sort-Level-1_2

// mit Variable
// const sortierung2 = languages.reverse();
// console.log(sortierung2);

const sortierung2 = () => languages.sort().reverse();
console.log(sortierung2());

// --- Array-Sort-Level-1_3

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

console.log(numArray1.sort((a, b) => a - b));
