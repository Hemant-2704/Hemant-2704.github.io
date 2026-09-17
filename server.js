const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const BUILD_DIR = path.join(__dirname, "build");

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".js": "application/javascript; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".json": "application/json; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  // Normalize URL removing query parameters
  const urlPath = req.url.split("?")[0];
  let filePath = path.join(BUILD_DIR, urlPath);

  // If path is a directory or points to root, serve index.html
  if (urlPath === "/" || urlPath === "") {
    filePath = path.join(BUILD_DIR, "index.html");
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";
      res.writeHead(200, { "Content-Type": contentType });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA fallback: return index.html for client-side routing
      const indexPath = path.join(BUILD_DIR, "index.html");
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (!indexErr && indexStats.isFile()) {
          res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
          fs.createReadStream(indexPath).pipe(res);
        } else {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("404 Not Found");
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`Portfolio Server running at http://localhost:${PORT}/`);
});
