const fs = require("fs");

const readFile = (path) => {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return rej(err);
      res(dataBuffer);
    });
  });
};
module.exports = { readFile };
