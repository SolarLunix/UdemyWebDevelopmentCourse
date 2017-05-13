var checks = document.getElementsByTagName("li");
var checks_hold = [];

for(var i = 0; i < checks.length; i++){
	checks[i].addEventListener("click", function(){
		this.classList.toggle("done");
		console.log(checks[i]);
	});
}