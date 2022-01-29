const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const dataDragon_version = "11.20.1";

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/spell/:key", (req, res) => {
  const key = req.params.key;
  const fs = require("fs");
  const path = `./src/assets/${dataDragon_version}/data/en_US/summoner.json`;
  const data = JSON.parse(fs.readFileSync(path, "utf8")).data;

  for (item in data) {
    if (data[item].key === key) {
      res.send(data[item]);
      return;
    }
  }
});

app.get("/rune/:id", (req, res) => {
  const id = req.params.id;
  const fs = require("fs");
  const path = `./src/assets/${dataDragon_version}/data/en_US/runesReforged.json`;
  const data = JSON.parse(fs.readFileSync(path, "utf8"));

  // console.log(
  //   `${__dirname}/src/assets/${dataDragon_version}/data/en_US/runesReforged.json`
  // );

  for (rune in data) {
    if (data[rune].id == id) {
      res.send(data[rune]);
      return;
    }
  }
});

app.use(
  "/image/champion",
  express.static(
    path.join(__dirname, "src", "assets", dataDragon_version, "img", "champion")
  )
);

app.use(
  "/image/item",
  express.static(
    path.join(__dirname, "src", "assets", dataDragon_version, "img", "item")
  )
);

app.use(
  "/image/profileicon",
  express.static(
    path.join(
      __dirname,
      "src",
      "assets",
      dataDragon_version,
      "img",
      "profileicon"
    )
  )
);

app.use(
  "/image/spell",
  express.static(
    path.join(__dirname, "src", "assets", dataDragon_version, "img", "spell")
  )
);

app.use(
  "/image/rune",
  express.static(path.join(__dirname, "src", "assets", "img"))
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
