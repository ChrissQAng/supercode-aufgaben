import express from "express";
// __dirname + import von url & path erstellt den richtigen pfad
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const app = express();

// middleware am Anfang zum Loggen von method & url
app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});

// Verlinkung der einzelnen Seiten ohne html (& "/" zu /home)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});
app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/public/work.html");
});
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/public/gallery.html");
});

// Verlinkung (automatisch) mit express.static
app.use(express.static("public"));

// fallback für "file not found"
app.use((req, res) => {
  res.status(404).send("<h1>404 File not found!!!</h1>");
});

const PORT = 1818;
app.listen(PORT, () => console.log("Server ready at", PORT));
