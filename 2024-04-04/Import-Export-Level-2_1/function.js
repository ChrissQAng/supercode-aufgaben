const bigCities = (arr) => {
  return arr.filter((item) => item.population > 100000);
};
const smallCities = (arr) => {
  return arr.filter((item) => item.population < 100000);
};

export { bigCities, smallCities };
