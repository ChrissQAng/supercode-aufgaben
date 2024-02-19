const getAmPm = (y, m, d, t) => {
  let date = new Date(y, m, d, t).getHours();
  console.log(date);
  console.log(date >= 12 ? "PM" : "AM");
};
getAmPm(1999, 10, 5, 15);
getAmPm();
getAmPm(2019, 12, 3, 12);
getAmPm(2000, 1, 1, 11);
