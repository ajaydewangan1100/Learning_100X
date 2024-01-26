const fs = require("fs");

fs.writeFile("4th-write-content.txt", ">>Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
