const doubleNumber = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dopple = number * 2;
      resolve(dopple);
    }, 2000);
  });
};
doubleNumber(5).then((dopple) => console.log(dopple));
