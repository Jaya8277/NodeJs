const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    res.json(JSON.parse(data));
  });
});

app.post("/", (req, res) => {
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.todos = [...parsed.todos, req.body];
    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.send("Todo Added");
      }
    );
  });
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.todos = parsed.todos.filter((el) => el.id != id);
    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.send("Todo deleted");
      }
    );
  });
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
    const parsed = JSON.parse(data);
    parsed.todos = parsed.todos.map((el) =>
      el.id == id ? (el = req.body) : el
    );
    fs.writeFile(
      "./db.json",
      JSON.stringify(parsed),
      { encoding: "utf-8" },
      () => {
        res.send("Todo updated");
      }
    );
  });
});

app.listen(8080, () => {
  console.log("server started on http://localhost:8080");
});