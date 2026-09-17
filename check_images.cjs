const fs = require("fs");
const path = require("path");

const imgDir = "src/assets/images";
const available = new Set(fs.readdirSync(imgDir));

const src = fs.readFileSync("src/portfolio.js", "utf8");
// collect values of keys that point at images
const keys = [
  "logo_path",
  "imagePath",
  "avatar_image_path",
  "profile_image_path",
  "header_image_path",
];
const referenced = new Map();
for (const k of keys) {
  const re = new RegExp(`"?${k}"?\\s*:\\s*"([^"]+)"`, "g");
  let m;
  while ((m = re.exec(src))) referenced.set(m[1], k);
}

console.log("Total distinct image refs: " + referenced.size);
let missing = 0;
for (const [file, key] of referenced) {
  if (!available.has(file)) {
    missing++;
    console.log(`MISSING  ${file}   (key: ${key})`);
  }
}
console.log("Missing: " + missing);