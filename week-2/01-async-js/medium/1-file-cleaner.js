let fs = require("fs");

(async () => {
  await fs.readFile("1-read-write-cleaner.txt", "utf-8", async (err, data) => {
    if (err) {
      console.log("Error:", err);
      return;
    }
    let newText = await data.replace(/ +/g, " ");
    await fs.writeFile("1-read-write-cleaner.txt", newText, function (err) {
      if (err) throw err;
      console.log("Saved!");
    });
  });
})();

// .replace( / +/g, '_')
