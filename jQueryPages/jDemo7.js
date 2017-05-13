 $("button").on("click", function(){
 	$("#fade").fadeToggle(1000, function(){
 		console.log("fade complete");
 	});

 	$("#slideUp").slideToggle(1000, function(){
 		console.log("slide complete")
 	});

 	$("#slideDown").slideToggle(1000, function(){
 		console.log("slide complete");
 	});
 });