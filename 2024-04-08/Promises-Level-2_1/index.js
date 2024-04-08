const randNum = () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 11);
    if (random > 6) {
      reject(random);
    }
    resolve(random);
  });
};
randNum()
  .then((random) => console.log("Die Zahl ist kleiner 6:  " + random))
  .catch((random) => console.log("Die Zahl ist größer 6:  " + random));
