var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0,
  lastTime = null;

function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
  cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
  hat.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
  hat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
