const singers = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];
// --- generate table

const output = document.querySelector("#table-container");
output.innerHTML = `<h3>Name</h3>
  <h3>Country</h3>
  <h3>Period Active</h3>
  <h3>Genre</h3>`;

//   --- output Funktion
const outputArray = (arrayOfObjects) => {
  arrayOfObjects.forEach((item) => {
    output.innerHTML += `<p>${item.name}</p>
  <p>${item.country}</p>
  <p>${item.period_active.start} - ${item.period_active.end}</p>
  <p>${item.genre}</p>`;
  });
};
outputArray(singers);

// --- button and input value
const buttonClick = document.querySelector("button");

buttonClick.addEventListener("click", () => {
  const inputArtist = document.querySelector("#searchInput").value;

  console.log(inputArtist);

  let searchedSingers = singers.filter((item) => {
    return item.name.toLowerCase().includes(inputArtist.toLowerCase());
  });
  console.log(searchedSingers);
  output.innerHTML = "";
  outputArray(searchedSingers);
});
