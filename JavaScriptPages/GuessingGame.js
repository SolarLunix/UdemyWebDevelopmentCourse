var correct = 7;
var found = false;
var aguess = prompt("Pick a number:");
var message;

while(!found){
	var guess = Number(aguess);
	if(Number(guess) === correct){
		found = true;
		break;
	}else if(guess > correct){
		message = "Too high, try again:";
	}else{
		message = "Too low, try again:";
	}

	aguess = prompt(message);
}

alert("YOU WON!!!");