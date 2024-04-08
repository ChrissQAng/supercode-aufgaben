const squareFunc = (number) => {
  return new Promise((resolve, reject) => {
    const square = number * number;
    // console.log(square);
    resolve(square);
  });
};
const otherFunc = (number) => {
  return squareFunc(number)
    .then((number) => console.log(number))
    .then((number) => console.log(number))
    .then((number) => console.log(number))

    .catch((number) => console.log("an error occured"));
};
otherFunc(2);

// funktioniert NICHT!
