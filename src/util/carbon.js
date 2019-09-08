const fs = require("fs-extra");
const path = require("path");
const puppeteer = require("puppeteer");

async function downloadImageForFile(filePath) {
  const fileContents = await fs.readFile(filePath, { encoding: "utf8" });
  const truncatedContents = fileContents
    .split("\n")
    .filter((line, index) => index <= 50)
    .join("\n");
  const escapedContents = encodeURIComponent(truncatedContents);
  const url = `https://carbon.now.sh/?l=markdown&fm=dm&code=${escapedContents}`;

  // I *really* don't want to do this, but it seems I don't really have a choice
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "load" });
  const exportContainer = await page.waitForSelector("#export-container");

  const screenshotPath = path.join(process.cwd(), "static", "screenshots");
  fs.mkdirs(screenshotPath);
  await exportContainer.screenshot({
    path: path.join(screenshotPath, path.basename(filePath)) + ".png"
  });
  await browser.close();
}

module.exports = downloadImageForFile;
