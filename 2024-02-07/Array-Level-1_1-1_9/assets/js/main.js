// --- Array-Level-1_1

const person = ["Tim", "Klaus", "Kevin"];
const friends = ["Gesine", "Jörg", "Schritt"];
const favoriteFood = ["Pizza", "Calamaris", "Hamburger"];

console.log(person);
console.log(friends);
console.table(favoriteFood);

// --- Array-Level-1_2

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

// --- Array-Level-1_3

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// --- Array-Level-1_4

console.log(person);
person.push("Thomas");
person.push("Michael");
console.table(person);

console.log(friends);
friends.push("Friedemann");
friends.push("Jascha");
console.table(friends);

console.log(favoriteFood);
favoriteFood.push("Schnitzel");
favoriteFood.push("Salat");
console.table(favoriteFood);

// --- Array-Level-1_5

console.log(person);
console.log(person.pop()); // warum wird das pop durchgeführt und nicht nur angezeigt?
console.log(person);

console.log(friends);
console.log(friends.pop());
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.pop());
console.log(favoriteFood);

// --- Array-Level-1_7

console.log(friends);
console.log(friends.unshift("Maria"));
console.log(friends.unshift("Herbert"));
console.log(friends);

console.log(favoriteFood);
console.log(favoriteFood.unshift("Schweinebraten"));
console.log(favoriteFood.unshift("Sushi"));
console.log(favoriteFood.unshift("Falaffel"));
console.log(favoriteFood);

// --- Array-Level-1_9

const array = [23, 54, 75];

console.log(array);
array.push(42);
array.push(43);
array.push(44);
console.log(array.push(45));
array.push(46);
console.log(array);

array.unshift(42);
array.unshift(41);
array.unshift(39);
array.unshift(38);
array.unshift(37);
console.log(array);

array.pop();
console.log(array.pop());

console.log(array);

console.log(array.shift());
console.log(array.shift());
console.log(array);
