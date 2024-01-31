const a = Number(prompt("Gib mir Zahl 1:"));
const b = Number(prompt("Gib mir Zahl 2:"));

function function1(a, b) {
  if (a === b) {
    console.log("Die Summe mal 5 ist:" + (a + b) * 5);
  } else {
    console.log("Die Summe ist: " + (a + b));
  }
}
function1(a, b);
