const squareFunc = (number) => {
  return new Promise((resolve, reject) => {
    const square = number * number;
    // console.log(square);
    resolve(square);
  });
};
const otherFunc = (number) => {
  return squareFunc(number)
    .then((result) => squareFunc(result))
    .then((result) => squareFunc(result))
    .then((result) => squareFunc(result))

    .catch((number) => console.log("an error occured"));
};
otherFunc(2).then((result) => console.log(result));
