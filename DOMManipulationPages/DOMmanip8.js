var button = document.getElementsByTagName("button")[0];
var body = document.querySelector("body");
var blue = true;

button.addEventListener("click", function(){
	if(blue){
		body.style.backgroundColor = "pink";
	}else{
		body.style.backgroundColor = "cyan";
	}
	console.log("click");
	blue = !blue;
});
