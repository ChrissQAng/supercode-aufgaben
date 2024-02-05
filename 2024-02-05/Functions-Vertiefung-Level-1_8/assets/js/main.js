const func1 = (yearBorn) => {
  const ageInnerFunction = 2024 - yearBorn;
  return ageInnerFunction;
};

let myAge = func1(1971);
console.log(myAge);

const func2 = (myAge, secondAge) => {
  if (myAge === secondAge) {
    return "Ihr seid gleich alt!";
  }
  return (
    "Du bist um " +
    (myAge > secondAge
      ? `${myAge - secondAge} Jahre älter!`
      : `${myAge - secondAge} Jahre jünger!`)
  );
};

console.log(func2(func1(1975), 25));
