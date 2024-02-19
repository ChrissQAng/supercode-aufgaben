let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
const getMonth = (date) => {
  const month = new Date(date);
  console.log(list[month.getMonth()]);
};

getMonth("2001-3-4");
getMonth("2019-12-24");
getMonth("1410-07-15");
