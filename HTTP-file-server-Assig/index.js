const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(res.url);
  if (req.url == "/") {
    res.setHeader("content-type", "text/html");
    res.write("<li> <a href=/index> Index Server</a> </li>");
    res.write("<li> <a href=index/public> Public Server</a> </li>");

    return res.end();
  }

  if (req.url === "/index") {
    fs.readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.setHeader("content-type", "text/html");
      return res.end(data);
      w;
    });
  }

  if (req.url === "/index/public") {
    fs.readFile("./public.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.setHeader("content-type", "text/html");
      return res.end(data);
      ;
    });
  }
});

server.listen(8080, () => {
  console.log("Server started on port http://localhost:8080/");
});