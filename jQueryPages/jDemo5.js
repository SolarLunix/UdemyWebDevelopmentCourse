var rndBackground = false;

$("button").click(function(){
	rndBackground = !rndBackground;
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		console.log("Task added");
	}
});

setInterval(function(){
	if(rndBackground){
		var colour = createColour();
		$("#colour").text(colour);
		$("body").css("backgroundColor", colour);
	}else{
		$("body").css("backgroundColor", "black");
		$("#colour").text("What colour do we have?");
	}
}, 500);

//Functions
function createColour(){
	//create the values
	var r = Math.floor(Math.random() * 255);
	var g = Math.floor(Math.random() * 255);
	var b = Math.floor(Math.random() * 255);

	//create the colour string
	var colourVal = "rgb(" + r + ", " + g + ", " + b + ")";

	//return the colour
	return colourVal;
}//end createColour