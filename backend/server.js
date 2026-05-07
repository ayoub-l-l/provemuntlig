let express = require("express");
let fs = require("fs");
let app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
});

let quotes = JSON.parse(fs.readFileSync("quotes.json"));

app.get("/quotes", function(req, res) {
  res.json(quotes);
});

app.get("/quotes/random", function(req, res) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.post("/quotes", function(req, res) {
  if (!req.body.text || req.body.text.trim() === "") {
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

app.listen(3000, function() {
  console.log("http://localhost:3000/quotes");
});