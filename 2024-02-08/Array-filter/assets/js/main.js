// ------- Array-filter-Level-1_1

const woerter = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];
console.log(woerter);

// --- direct loggen
console.log(
  woerter.filter((wort) => {
    return wort.length <= 6;
  })
);
// --- mit zwischenvariable

const kurzeWoerter = woerter.filter((wort) => {
  return wort.length <= 6;
});
console.log(kurzeWoerter);

// -------- Array-filter-Level-1_2

const heros = [
  "Superman",
  "Batman",
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  null,
];

console.table(heros);

const herosFilter = heros.filter((hero) => hero);
console.log(herosFilter);
