const fs = require("fs");
const data = require("./data.json");

// console.log(data);

if (fs.existsSync("./new.txt")) {
  fs.unlinkSync("./new.txt");
}

data.forEach((item) => {
  const output = `${item.id} - ${item.title}\n ${item.description} \n\n`;
  fs.appendFileSync("./new.txt", output, (err) => {
    if (err) console.log("error appending strings", err);
  });
});
