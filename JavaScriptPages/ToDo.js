var todos = [];
var input = "fact";
var theList = "";
var count = 0;

while(input !== "quit"){
	input = prompt("What would you like to do?");
	input = input.toLowerCase();
	if(input.indexOf("new") >= 0){
		var newToDo = prompt("Enter new item: ");
		todos.push(newToDo);
	}else if(input.indexOf("list") >= 0){
		reset("list");
		todos.forEach(createList);
		alert(theList);
	}else if(input.indexOf("delete") >= 0){
		reset("delete");
		todos.forEach(createList);
		var toDelete = prompt(theList);
		todos.splice(toDelete, 1);
		reset("update");
		todos.forEach(createList);
		alert(theList);
	}else if(input.indexOf("quit") >= 0){
		alert("Thank you for using my app, come again!");
	}else{
		alert("Invalid input, try again.");
	}
}

function createList(listItem){
	theList += count + ": " + listItem + "\n";
	count ++;
}

function reset(arg){
	if(arg === "delete"){
		theList = "Please chose the number of the item you wish to delete: \n\n";
	}else if(arg === "list"){
		theList = "Your ToDo List is as follows: \n\n";
	}else if(arg === "update"){
		theList = "Your updated ToDo list is as follows: \n\n"
	}
	count = 0;
}