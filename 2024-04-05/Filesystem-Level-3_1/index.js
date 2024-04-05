const fs = require("fs");

const addLine = (line) => {
  if (!fs.existsSync("./ordner")) fs.mkdirSync("./ordner");
  fs.appendFile("./ordner/text.txt", `${line}\n`, (err) => {
    if (err) console.log("append error", err);
  });
};

addLine("Hello");
