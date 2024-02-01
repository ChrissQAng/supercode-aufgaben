// ----- if else

// function adult(event) {
//   event.preventDefault();
//   const getAge = document.body.querySelector("#age").value;
/
//   const output = document.body.querySelector("form p");
//   if (getAge >= 18) {

//     // document.write("volljährig !");
//     output.innerHTML = "volljährig !";
//   } else {

//     // document.write("minderjährig !");
//     output.innerHTML = "minderjährig !";
//   }
// }

// ----- ternary

function adult(event) {
  event.preventDefault();
  const getAge = document.body.querySelector("#age").value;
  console.log(getAge);
  const output = document.body.querySelector("form p");
  const adultOrNotOutput =
    getAge >= 18
      ? (output.innerHTML = "volljährig !")
      : (output.innerHTML = "minderjährig !");
}
