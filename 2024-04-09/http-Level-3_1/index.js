const http = require("http");
const { readFile } = require("./filesystem.js");
const fs = require("fs");

// load error-page first

const errorPage = fs.readFileSync("./assets/error.html");

// routing

const server = http.createServer((request, response) => {
  if (request.method !== "GET") {
    response.end("Internal Server Error!");
    return;
  }

  const path = "./assets" + (request.url === "/" ? "/home.html" : request.url);

  readFile(path)
    .then((dataBuffer) => {
      response.write(dataBuffer);
      response.end();
    })
    .catch((err) => {
      const FILE_NOT_FOUND = "ENOENT";
      if (err.code === FILE_NOT_FOUND) {
        response.writeHead(404);
      } else {
        console.log(err);
        response.writeHead(500);
      }
      response.end(errorPage);
    });

  // if (
  //   request.method === "GET" &&
  //   (request.url === "/" || request.url === "/home")
  // ) {
  //   readFile("./pages/home.html")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else if (request.method === "GET" && request.url === "/aboutus") {
  //   readFile("./pages/aboutus.html")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else if (request.method === "GET" && request.url === "/howitworks") {
  //   readFile("./pages/howitworks.html")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else if (request.method === "GET" && request.url === "/categories") {
  //   readFile("./pages/categories.html")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else if (request.method === "GET" && request.url === "/testimony") {
  //   readFile("./pages/testimony.html")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else if (request.method === "GET" && request.url === "/stylescss") {
  //   readFile("./css/styles.css")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else if (request.method === "GET" && request.url === "/images/forest.jpg") {
  //   readFile("./images/forest.jpg")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // } else {
  //   readFile("./pages/error.html")
  //     .then((dataBuffer) => {
  //       response.write(dataBuffer);
  //       response.end();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       response.end("Internal Server Error!");
  //     });
  // }
});

// requestListener & port 3003

const PORT = 3003;
server.listen(PORT, () => console.log("server ready PORT", PORT));
