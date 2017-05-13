var div = document.querySelector("div");
var h1 = document.querySelector("h1");

div.classList.add("superSpecial");
h1.classList.add("superSpecial");

setInterval(function(){
	div.classList.toggle("superSpecial");
	h1.classList.toggle("superSpecial");
}, 1000);