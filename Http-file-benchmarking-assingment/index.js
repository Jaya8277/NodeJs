const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/textsync") {
    const data = fs.readFileSync("./test.txt");
    res.setHeader("content-type", "text/plain");
    return res.end(data);
  }

  if (req.url === "/textasync") {
    fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.setHeader("content-type", "text/plain");
      return res.end(data);
    });
  }

  if (req.url === "/textstream") {
    const stream = fs.createReadStream("./test.txt");
    stream.pipe(res);
  }
});

server.listen(8080);