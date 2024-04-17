import fs from "fs";
import url from "url";
import path from "path";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// readBlog
function readJsonFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, dataBuffer) => {
      if (err) return reject(err);
      const jsonString = dataBuffer.toString();
      const jsObj = JSON.parse(jsonString);
      resolve(jsObj);
    });
  });
}

export function readBlog() {
  return readJsonFile(__dirname + "/data/blogcontent.json");
}

// writeBlog
function writeJsonFile(path, jsObj) {
  return new Promise((resolve, reject) => {
    const jsonString = JSON.stringify(jsObj, null, 2);
    fs.writeFile(path, jsonString, (err) => {
      if (err) return reject(err);
      resolve(jsObj);
    });
  });
}
export function writeBlog(blogArray) {
  return writeJsonFile(__dirname + "/data/blogcontent.json", blogArray);
}
