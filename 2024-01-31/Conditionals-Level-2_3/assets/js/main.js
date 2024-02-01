function operation(certainNumber) {
  // const certainNumber = prompt("Gib mir eine bestimmte Zahl:");
  console.log("Bestimmte Zahl: " + certainNumber);

  const newNumber = certainNumber - 27;
  console.log("Zahl - 27 = " + newNumber);

  if (certainNumber > 27) {
    console.log("Erhaltene Differenz *2 :" + 2 * newNumber);
  } else {
    console.log("Die ursprüngliche Zahl ist kleiner oder gleich 27!");
  }
}
operation(35);
operation(74);
operation(123);
