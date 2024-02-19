const whichDay = (a) => {
  let weekDay = new Date(a).toLocaleString("default", { weekday: "long" });
  //   console.log(weekDay);
  if (weekDay === "Samstag" || weekDay === "Sonntag") {
    console.log("Wochenende");
  } else {
    console.log("Arbeitstag");
  }
};
whichDay("12.15.2019");
whichDay("2.16.2001");
whichDay("2.1.2020");
whichDay("2.29.2020");
