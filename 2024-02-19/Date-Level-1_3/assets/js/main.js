const output = document.querySelector(".output-html");
const actualTime = new Date();

console.log(actualTime);

actualTime.setDate(20);
actualTime.setMonth(5);
actualTime.setFullYear(2222);

actualTime.innerHTML += actualTime + `</br>`;

actualTime.setDate(24);
actualTime.setMonth(1);
actualTime.setFullYear(2123);

output.innerHTML += actualTime + `</br>`;

actualTime.setMonth(2);

output.innerHTML += actualTime + `</br>`;
actualTime.setDate(3);

output.innerHTML += actualTime + `</br>`;

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 30);

output.innerHTML += currentDate;
