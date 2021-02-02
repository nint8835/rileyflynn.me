const fs = require("fs-extra");
const path = require("path");
const fetch = require("node-fetch");

async function downloadImageForFile(filePath) {
  const fileContents = await fs.readFile(filePath, { encoding: "utf8" });
  const truncatedContents = fileContents
    .split("\n")
    .filter((line, index) => index <= 50)
    .join("\n");

  const resp = await fetch("https://carbonara.now.sh/api/cook", {
    method: "POST",
    body: JSON.stringify({
      code: truncatedContents,
      language: "rust", // HCL / TF isn't a supported language, but this gets a reasonable looking output
      fontFamily: "dm",
      backgroundColor: "rgba(149, 117, 205, 1)",
      theme: "monokai",
    }),
    headers: { "Content-Type": "application/json" },
  });
  const body = await resp.buffer();
  const screenshotPath = path.join(process.cwd(), "static", "screenshots");
  await fs.writeFile(
    path.join(screenshotPath, path.basename(filePath)) + ".png",
    body
  );
}

module.exports = downloadImageForFile;
