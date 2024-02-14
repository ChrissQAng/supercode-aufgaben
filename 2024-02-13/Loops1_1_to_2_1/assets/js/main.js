// --- Loops-Level-1_1

for (i = 1; i <= 10; i++) {
  console.log(`Hello World ${i}`);
}
console.clear();

// --- Loops-Level-1_2

let numArray = [];

for (i = 0; i <= 10; i++) {
  numArray.push(i);
}
console.table(numArray);

console.clear();

// --- Loops-Level-1_4

let names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

// --- "for let loop":
for (let i of names) {
  console.log(i);
}
// ---"for loop":
for (i = 0; i <= names.length - 1; i++) {
  console.log(` for loop: ${names[i]}`);
}
console.clear();
// --- Bemerkung: Der "for let loop" hört am Ende des Arrays automatisch auf.
// ---            Der "let loop" zählt beim array.lenght 1 Element zu viel!

// --- Loops-Level-2_1

const imageArray = () => {
  let returnArray = [];
  for (i = 1; i < 101; i++) {
    if (i < 10) {
      returnArray.push(`image_00` + i + `.jpg`);
    } else if (i < 100) {
      returnArray.push(`image_0` + i + `.jpg`);
    } else {
      returnArray.push(`image_` + i + `.jpg`);
    }
  }

  console.log(returnArray);
};

imageArray();
