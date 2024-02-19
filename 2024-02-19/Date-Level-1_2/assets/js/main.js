// let monate = [
//   "Januar",
//   "Februar",
//   "März",
//   "April",
//   "Mai",
//   "Juni",
//   "Juli",
//   "August",
//   "September",
//   "Oktober",
//   "November",
//   "Dezember",
// ];

// let wochenTag = [
//   "Sonntag",
//   "Montag",
//   "Dienstag",
//   "Mittwoch",
//   "Donnerstag",
//   "Freitag",
//   "Samstag",
// ];
// const output = document.querySelector(".output-time");
// const actualTime = new Date();

// output.innerHTML += `${actualTime} </br>`;
// output.innerHTML += `${actualTime.getFullYear()}</br>`;
// output.innerHTML += `${actualTime.getMonth()} Monat</br>`;
// output.innerHTML += `${actualTime.getHours()} Tag</br>`;
// output.innerHTML += `${actualTime.getMinutes()} Minute</br>`;
// wochenTag.forEach((tag) => {
//   output.innerHTML +=
//     actualTime.toLocaleDateString("default", {
//       weekday: "long",
//     }) === tag
//       ? `<p>${tag}</p>`
//       : "";
// });

// output.innerHTML += monate[actualTime.getMonth()];

// --- Uhr
// const outDay = document.querySelector(".day");

const outputTime = () => {
  const currentTime = new Date();
  document.querySelector(".day").textContent = currentTime.toLocaleString(
    "default",
    {
      weekday: "short",
    }
  );
  document.querySelector(".hour").textContent =
    ":  " + (currentTime.getHours() - 12);
  document.querySelector(".minute").textContent =
    ":  " + currentTime.getMinutes();
  document.querySelector(".second").textContent =
    ":  " + currentTime.getSeconds();
  document.querySelector(".noon").textContent =
    ":  " + (currentTime.getSeconds() + 12 >= 12 ? "PM" : "AM");
};

setInterval(outputTime, 1000);
