let express = require("express");
let fs = require("fs");
let cors = require("cors");

let app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let PORT;

if (process.env.PORT) {
  PORT = process.env.PORT;
} else {
  PORT = 3000;
}

let quotes = JSON.parse(fs.readFileSync("quotes.json"));

app.get("/quotes", function (req, res) {
  res.json(quotes);
});

app.get("/quotes/random", function (req, res) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.post("/quotes", function (req, res) {

  let textMissing = false;

  if (!req.body.text) {
    textMissing = true;
  } else {
    if (req.body.text.trim() === "") {
      textMissing = true;
    }
  }

  if (textMissing === true) {
    return res.json({ error: "Text is required" });
  }

  let newQuote = {
    id: quotes.length + 1,
    text: req.body.text
  };

  quotes.push(newQuote);

  fs.writeFileSync("quotes.json", JSON.stringify(quotes, null, 2));

  res.json(newQuote);
});

app.listen(PORT, function () {
  console.log("Server kjører på http://192.168.20.72:" + PORT);
});