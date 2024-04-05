import { log } from "console";
import fs from "fs";

fs.writeFile("./blog1.txt", "Ich bin ein Web-Dev", (err) => {
  if (err) return console.log(err);
  console.log("Text überschrieben");
  fs.writeFile("./blog2.txt", "Einen beliebigen Text.", (err) => {
    if (err) return console.log(err);
    console.log("Datei und beliebiger Text erzeugt");
  });
});
if (fs.existsSync("./assets")) {
  fs.rmdirSync("./assets");
  console.log("Ordner assets erfolgreich gelöscht");
}
fs.mkdirSync("./assets");
console.log("Ordner assets erfolgreich angelegt");
if (fs.existsSync("./delete")) {
  fs.unlinkSync("./delete");
}

fs.appendFile("./delete", "", (err) => {
  if (err) console.log("error creating file delete");
});
fs.writeFile("./Hello.txt", "Zweiter beliebiger Text.", (err) => {
  if (err) return console.log("error creating file Hello.txt");
  fs.rename("./Hello.txt", "./HelloWorld.txt", (err) => {
    if (err) console.log("error renaming Hello.txt");
  });
});
