//field.addEventListener("keydown", function (event) {
	//debugar jeito um
  //console.log(event)

  //debugar jeito dois
  //debugger


var field = document.querySelector("input");
field.addEventListener("keypress", function (event) {
	var char = String.fromCharCode(event.charCode)

	if (char === "q" || char === "Q") {
		event.preventDefault()
	
	}else if (char === "w" || char === "W") {
		event.preventDefault()
	
	}else if (char === "x" || char === "X") {
		event.preventDefault()
	
	}
});
