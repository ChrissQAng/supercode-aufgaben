// {
//     "id": "0",
//     "author": "Alejandro Escamilla",
//     "width": 5000,
//     "height": 3333,
//     "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
//     "download_url": "https://picsum.photos/id/0/5000/3333"
//     }

fetch("https://picsum.photos/v2/list")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((singleObject) => {
      let tile = document.createElement("div");
      // --- image into html
      let image = document.createElement("img");
      image.setAttribute("src", singleObject.download_url);
      tile.appendChild(image);
      // --- author into html
      let author = document.createElement("p");
      author.textContent = singleObject.author;
      tile.appendChild(author);

      // --- button into html
      let button = document.createElement("button");
      button.textContent = "See More";
      tile.appendChild(button);

      //   --- all created html-tags into html
      document.querySelector(".pictures").appendChild(tile);

      //   --- set event listener to button and log id
      button.addEventListener("click", () => {
        console.log(`Die id zu dieeser Kachel ist ${singleObject.id}`);
      });
    });
  })
  .catch((err) => console.error("Fehler beim Fetchen von 'data' "));
