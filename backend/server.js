let express = require("express");
let fs = require("fs");
let app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// hent data fra fil
let quotes = JSON.parse(fs.readFileSync("quotes.json"));

// hent alle
app.get("/quotes", function(req, res) {
  res.json(quotes);
});

// random quote
app.get("/quotes/random", function(req, res) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// legg til ny quote
app.post("/quotes", function(req, res) {
  let newQuote = {
    id: quotes.length + 1,
    text: req.body.text
  };

  quotes.push(newQuote);

  // lagre tilbake til fil
  fs.writeFileSync("quotes.json", JSON.stringify(quotes, null, 2));

  res.json(newQuote);
});

app.listen(3000, function() {
  console.log("http://localhost:3000/quotes/random");
});