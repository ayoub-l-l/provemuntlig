function getQuote() {
  fetch("http://192.168.20.72:3000/quotes/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("quote").innerText = data.text;
    });
}

function addQuote() {
  let text = document.getElementById("newQuote").value;

  if (text.trim() === "") return;

  fetch("http://192.168.20.72:3000/quotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  });

  document.getElementById("newQuote").value = "";
}