//------- Listeners -------
//Check off li's
$("#list").on("click", "li", function(){
	$(this).toggleClass("completed");
});//end Chekc off li's

//Delete ToDos
$("#list").on("click", ".delete", function(event){
	$(this).parent().fadeOut(function(){
		$(this).delete;
	});
	event.stopPropagation();
});//end Delete ToDos

//Adding a list item to the ul#list 
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("#list").append("\n<li><span class=\"delete\"><i class=\"fa fa-times\"></i></span><span class=\"check\"><i class=\"fa fa-check\"></i></span> " + text + "</li>");
	}
});//end Adding a list item


//Made the input fade in and out
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});//end making the input fade in and out