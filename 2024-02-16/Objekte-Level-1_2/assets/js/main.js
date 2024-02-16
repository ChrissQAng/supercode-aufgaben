const person = {
  name: "Christian",
  alter: 49,
  sagNameAlter: () => {
    alert(`Du heisst ${person.name} und bist ${person.alter} Jahre alt.`);
  },
};
console.log(person.name, person.alter);
console.log(person.sagNameAlter());
