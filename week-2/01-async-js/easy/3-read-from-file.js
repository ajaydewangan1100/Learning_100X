const fs = require("fs");
fs.readFile("3-read-from-file.md", "utf-8", (err, data) => {
  if (err) {
    console.log("Error:", err);
    return;
  }
  console.log("File content:", data);
});
