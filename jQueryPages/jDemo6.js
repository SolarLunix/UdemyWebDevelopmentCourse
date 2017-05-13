var colours = ["red", "blue", "green", "purple"];

$("h1").on("click", function(){
	colour = colours[Math.floor(Math.random() * colours.length)];
	$(this).css("color", colour);
});

$("h1").on("dblclick", function(){
	colour = colours[Math.floor(Math.random() * colours.length)];
	$("button").css("color", colour);
	console.log("double");
});

$("input").on("keypress", function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("#text").text(text); 
	}
});

$("button").on("mouseenter", function(){
	$(this).css("fontWeight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("fontWeight", "normal");
});