const http = require("http");
const { readFile } = require("./filesystem.js");

// routing

const server = http.createServer((request, response) => {
  if (
    request.method === "GET" &&
    (request.url === "/" || request.url === "/home")
  ) {
    readFile("./pages/home.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else if (request.method === "GET" && request.url === "/about") {
    readFile("./pages/about.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else if (request.method === "GET" && request.url === "/contact") {
    readFile("./pages/contact.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else if (request.method === "GET" && request.url === "/faq") {
    readFile("./pages/faq.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  } else {
    readFile("./pages/error.html")
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })
      .catch((err) => {
        console.log(err);
        response.end("Internal Server Error!");
      });
  }
});

// requestListener & port 3003

const PORT = 3003;
server.listen(PORT, () => console.log("server ready PORT", PORT));
