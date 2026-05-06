let express = require("express");
let app = express();

app.use(express.json());

// CORS (så frontend funker)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

let quotes = [
  { id: 1, text: "Believe in yourself" },
  { id: 2, text: "Push yourself, because no one else will" },
  { id: 3, text: "Success starts with self-discipline" },
  { id: 4, text: "Dream big and dare to fail" }
];

// hent alle quotes
app.get("/quotes", function(req, res) {
  res.json(quotes);
});

// hent tilfeldig quote
app.get("/quotes/random", function(req, res) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.listen(3000, function() {
  console.log("Server kjører på port 3000");
});