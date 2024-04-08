const wait = (num) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num);
    });
  }, num);
};

const randNum = Math.floor(Math.random() * 1000) + 1;

wait(randNum).then((num) => console.log(num));

Promise.all([wait(randNum), wait(randNum), wait(randNum)]).then((numArr) =>
  console.log(numArr)
);
