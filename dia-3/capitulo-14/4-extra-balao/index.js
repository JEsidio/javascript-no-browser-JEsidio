var p = document.querySelector("p");
var size;

function setSize(newSize) {
  size = newSize;
  p.style.fontSize = size + "px";
}
setSize(50);

function handleArrow(event) {
  if (event.key == "ArrowUp") {
    if (size > 100) {
      p.textContent = "💥";
      document.body.removeEventListener("keydown", handleArrow);
    } else {
      setSize(size * 1.1);
      event.preventDefault();
    }
  } else if (event.key == "ArrowDown") {
    setSize(size * 0.9);
    event.preventDefault();
  }
}

document.body.addEventListener("keydown", handleArrow);
