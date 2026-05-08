function getQuote() {
  fetch("http://192.168.20.72:3000/quotes/random")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerText = data.text;
    })
    .catch(function (err) {
      console.log("GET error:", err);
    });
}

function addQuote() {
  let text = document.getElementById("newQuote").value;

  if (text.trim() === "") {
    return;
  }

  fetch("http://192.168.20.72:3000/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("Added:", data);
    })
    .catch(function (err) {
      console.log("POST error:", err);
    });

  document.getElementById("newQuote").value = "";
}