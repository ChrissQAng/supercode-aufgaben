const output = document.querySelector(".output-date");

const date = () => {
  const currentDate = new Date();
  console.log(currentDate);
  output.innerHTML = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;
};
date();
