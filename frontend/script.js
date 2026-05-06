function getQuote() {
  fetch("http://localhost:3000/quotes/random")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      document.getElementById("quote").innerText = data.text;
    });
}