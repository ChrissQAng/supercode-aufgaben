const output = document.querySelector(".output-html");
const actualTime = new Date();

console.log(actualTime);

output.innerHTML += `${actualTime}</br>`;
// const dateDiff = actualTime.setDate(24);
output.innerHTML += `${actualTime.setDate(24).toLocaleString}</br>`;
