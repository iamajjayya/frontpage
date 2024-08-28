// import http from "http";
// import fs from "fs/promises";
// import url from "url";
// import path from "path";

// const PORT = process.env.PORT || 5000;
// const server = http.createServer(async (req, res) => {
//   //   res.setHeader("Content-Type", "text/html");
//   //   res.statusCode = 404;

//   const __filename = url.fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);

//   console.log(__filename, __dirname);

//   try {
//     if (req.method === "GET") {
//       let filePath;
//       if (req.url === "/") {
//         filePath = path.join(__dirname, "public", "index.html");
//       } else if (req.url === "/about") {
//         filePath = path.join(__dirname, "public", "about.html");
//       } else {
//         throw new Error(" Invalid response");
//       }

//       const data = await fs.readFile(filePath);
//       res.writeHead(200, "Content-Type", "text/html");
//       res.write(data);
//       res.end();
//     } else {
//       throw new Error(" Invalid response");
//     }
//   } catch (error) {
//     res.writeHead(500, { "Content-type": "text/plain" });
//     res.end("Page Not Found", error);
//   }

//   // console.log(req.url)
//   // console.log(req.method)
// });

// server.listen(PORT, () => {
//   console.log(`Listinig server in  port ${PORT}`);
// });

import http from "http";
import url from "url";

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const parsedurl = url.parse(req.url, true);
  const pathname = parsedurl.pathname;

  if (req.method === "GET" && pathname === "/api/greet") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: " hello good morning  " }));
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.end(JSON.stringify({ message: " server error   " }));
  }
});

server.listen(PORT, () => {
  console.log("Listen  5000");
});
