const fs = require("fs-extra");
const path = require("path");
const downloadImageForFile = require("./src/util/carbon.js");

(async () => {
  await Promise.all(
    (await fs.readdir("terraform"))
      .filter((fileName) => fileName.endsWith(".tf"))
      .map((fileName) => path.join(__dirname, "terraform", fileName))
      .map(downloadImageForFile)
  );
})();
