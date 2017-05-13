var num = prompt("How old are you?");
var message = null;

if(num < 0){
	message = "ERROR!";
}else if(num == 21){
	message = "Happy 21st Birthday!";
}else if(num%2 == 1){
	message = "Your age is an odd number";
}else{
	message = "Thank you";
}

if((Math.sqrt(num)%1) == 0){
	message += "\n\n Your age is a perfect square.";
}

alert(message);