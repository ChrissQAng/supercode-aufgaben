let monate = [
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

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];
const output = document.querySelector(".output-time");
const actualTime = new Date();

output.innerHTML += `${actualTime} </br>`;
output.innerHTML += `${actualTime.getFullYear()}</br>`;
output.innerHTML += `${actualTime.getMonth()} Monat</br>`;
output.innerHTML += `${actualTime.getHours()} Tag</br>`;
output.innerHTML += `${actualTime.getMinutes()} Minute</br>`;
wochenTag.forEach((tag) => {
  output.innerHTML +=
    actualTime.toLocaleDateString("default", {
      weekday: "long",
    }) === tag
      ? `<p>${tag}</p>`
      : "";
});

output.innerHTML += monate[actualTime.getMonth()];
