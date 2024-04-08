const wait = (num) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num);
    });
  }, num);
};

const randNum1 = Math.floor(Math.random() * 1000) + 1;
const randNum2 = Math.floor(Math.random() * 1000) + 1;
const randNum3 = Math.floor(Math.random() * 1000) + 1;

// wait(randNum).then((num) => console.log(num));

Promise.all([wait(randNum1), wait(randNum2), wait(randNum3)]).then((numArr) =>
  console.log(numArr)
);
