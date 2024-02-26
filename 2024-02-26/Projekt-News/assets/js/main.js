// api key: 5a1027bfdcf04470a4aee6f8dafe5578

// ---input-value

const searchFunction = () => {
  document.querySelector(".tiles-output").innerHTML = "";
  const searchInput = document.querySelector("#search").value;

  if (searchInput === "") {
    document.querySelector("#search").placeholder =
      "Bitte Suchbegriff eingeben";
    return;
  }
  console.log(searchInput);
  // ---  language
  let language = document.querySelector("#language").value;
  // --- sort
  let sort = document.querySelector("#sort-option").value;

  fetch(
    `http://newsapi.org/v2/everything?q=${searchInput}&from=2024-01-26&sortBy=${sort}&language=${language}&apiKey=5a1027bfdcf04470a4aee6f8dafe5578`
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      data.articles.forEach((singleObject) => {
        console.log(singleObject);
        // --- create div singleTile
        let singleTile = document.createElement("div");
        // --- delete tiles
        singleTile.innerHTML = "";
        // --- headline
        let title = document.createElement("h5");
        title.textContent = singleObject.title;
        singleTile.appendChild(title);
        // --- news text
        let newsText = document.createElement("p");
        newsText.textContent = singleObject.content;
        singleTile.appendChild(newsText);
        // --- img
        let image = document.createElement("img");
        image.setAttribute("src", singleObject.urlToImage);
        singleTile.appendChild(image);
        // --- button into the tile
        let linkButton = document.createElement("button");
        linkButton.textContent = "Zum Artikel";
        singleTile.appendChild(linkButton);
        // --- link on button
        linkButton.addEventListener("click", () => {
          window.open(singleObject.url);
        });
        // --- all created html-tags into html
        document.querySelector(".tiles-output").appendChild(singleTile);
      });
    })
    .catch((err) => console.error("Error in data", err));
};
