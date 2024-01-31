function adult(event) {
  event.preventDefault();
  const getAge = document.body.querySelector("#age").value;
  console.log(getAge);
  const output = document.body.querySelector("form p");
  if (getAge >= 18) {
    // console.log("volljährig");
    // document.write("volljährig !");
    output.innerHTML = "volljährig !";
  } else {
    // console.log("minderjährig");
    // document.write("minderjährig !");
    output.innerHTML = "minderjährig !";
  }
}
