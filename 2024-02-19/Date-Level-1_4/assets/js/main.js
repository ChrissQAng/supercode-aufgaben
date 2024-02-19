const daysOfMonth = (jahr, monat) => new Date(jahr, monat, 0).getDate();
console.log(daysOfMonth(2016, 1));
console.log(daysOfMonth(2016, 2));
console.log(daysOfMonth(2017, 2));
console.log(daysOfMonth(2017, 12));
