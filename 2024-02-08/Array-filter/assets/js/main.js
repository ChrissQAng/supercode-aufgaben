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

// let filterMovies = movies.filter((film) => {
//   return film.includes("Pulp");
// });

const filterHeroes = heros.filter(
  (oneHero) => oneHero !== undefined && oneHero == !null
);
console.log(filterHeroes);

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
console.log(heros);
const myHeros = heros.filter(
  (element) => element !== undefined && element !== null
);
console.log(myHeros);
