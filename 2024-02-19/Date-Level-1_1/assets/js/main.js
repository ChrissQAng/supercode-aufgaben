const output = document.querySelector(".output-date");

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

output.innerHTML = `${date1} = new Date("September 2, 2019 09:00:00")</br>`;
output.innerHTML += `${date2} = new Date(0)</br>`;
output.innerHTML += `${date3} = new Date(31556908800)</br>`;
output.innerHTML += `${date4} = new Date(86400000)</br>`;
