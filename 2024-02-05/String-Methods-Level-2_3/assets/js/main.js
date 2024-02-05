const highlightText = () => {
  // --- get input
  const userInput = document.body.querySelector("#search-input").value;
  console.log(userInput);

  // --- get complete text
  const completeText = document.body.querySelector("article").innerText;
  console.log(completeText);

  // --- replace text
  document.querySelector("article").innerHTML = completeText.replaceAll(
    userInput,
    `<span class="highlight">${userInput}</span>`
  );
};
