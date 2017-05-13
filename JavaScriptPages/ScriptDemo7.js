console.log("Check if a number is even:");

function isEven(num){
	return (num%2 === 0);
}

console.log("The number 4 is even: " + isEven(4));
console.log("The number 21 is even: " + isEven(21));
console.log("The number 68 is even: " + isEven(68));
console.log("The number 333 is even: " + isEven(333));

console.log("\nGet the Factorial");

function factorial(num){
	var ans = 1;
	for(var i = num; i > 1; i--){
		ans *= i;
	}
	return ans;
}

console.log("5! is: " + factorial(5));
console.log("2! is: " + factorial(2));
console.log("10! is: " + factorial(10));
console.log("0! is: " + factorial(0));

console.log("\nChange from kebab to snake.");

function kebabToSnake(str){
	var snake = str.replace(/-/g, "_");
	return snake;
}

console.log("hello-world : " + kebabToSnake("hello-world"));
console.log("dogs-are-awesome : " + kebabToSnake("dogs-are-awesome"));
console.log("blah : " + kebabToSnake("blah"));