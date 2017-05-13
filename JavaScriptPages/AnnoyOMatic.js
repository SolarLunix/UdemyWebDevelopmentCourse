var there = false;
var response = "no";
var yesIndex = -1;
var yeahIndex = -1;

// Note that my code is different from the code-along because I coded first then listened to the solution
while(!there){
	response = prompt("Are We There Yet?");

	response = response.toUpperCase();

	yesIndex = response.indexOf("YES");
	yeahIndex = response.indexOf("YEAH");

	if(yesIndex >= 0 || yeahIndex >= 0){
		alert("YAY! WE'RE THERE!");
		there = true;
	}
}

//Their Code moves the indexOf to where !there is.