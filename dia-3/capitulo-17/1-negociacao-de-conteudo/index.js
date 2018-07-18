var contentDiv = document.querySelector("#conteudo");

function requestAuthor(type) {
  var req = new XMLHttpRequest();
  req.open("GET", "http://eloquentjavascript.net/author", false);
  req.setRequestHeader("accept", type);
  req.send(null);
  return req.responseText;
}

var types = ["text/plain",
             "text/html",
             "application/json",
             "application/rainbows+unicorns"];

types.forEach(function(type) {
  try {
    var content = requestAuthor(type);
    console.log(type + ":\n", content, "\n");

    var node = document.createElement("div");
    node.textContent = content;

    contentDiv.appendChild(node);
  } catch (e) {
    console.log("Raised error: " + e);
  }
});
