function getQuote() {
  fetch("http://localhost:3000/quotes/random")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      document.getElementById("quote").innerText = data.text;
    });
}

function addQuote() {
  let text = document.getElementById("newQuote").value;

  if (text.trim() === "") {
    return;
  }

  fetch("http://localhost:3000/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  });

  document.getElementById("newQuote").value = "";
}