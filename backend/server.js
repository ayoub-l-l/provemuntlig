let express = require("express");
let fs = require("fs");
let app = express();

let PORT = process.env.PORT || 3000;
let quotes = JSON.parse(fs.readFileSync("quotes.json"));

app.use(express.json());

app.get("/quotes", function(req, res) {
  res.json(quotes);
});

app.get("/quotes/random", function(req, res) {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});


app.listen(PORT, "0.0.0.0", function() {
  console.log(`Server kjører på http://192.168.20.72:${PORT}`);
});