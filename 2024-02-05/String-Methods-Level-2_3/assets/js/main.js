const highlightText = () => {
  // --- get input
  const userInput = document.body.querySelector("#search-input").value;

  // --- get complete text
  const completeText = document.body.querySelector("article").innerText;


  // --- replace text
  document.querySelector("article").innerHTML = completeText.replaceAll(
    userInput,
    `<span class="highlight">${userInput}</span>`
  );
};
