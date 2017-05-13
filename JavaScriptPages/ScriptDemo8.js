var myArray = [];

console.log("*******\nPrint an array in reverse:");

function printReverse(anArray){
	var hold = anArray.length - 1;
	for(var i = hold; i >= 0; i--){
		console.log(anArray[i]);
	}
}

myArray = [1,2,3,4];
console.log(myArray);
printReverse(myArray);

myArray = ["a", "b", "c"];
console.log(myArray);
printReverse(myArray);



console.log("\n*******\nCheck if an array is uniform:");

function isUniform(anArray){
	for(var i = 1; i < anArray.length; i++){
		if(anArray[i] !== anArray[i-1]){
			return false;
		}
	}
	return true;
}

myArray = [1,1,1,1];
console.log(myArray + " is uniform: " + isUniform(myArray));

myArray = [2,1,1,1];
console.log(myArray + " is uniform: " + isUniform(myArray));

myArray = ["a", "b", "p"];
console.log(myArray + " is uniform: " + isUniform(myArray));

myArray = ["a", "a", "a"];
console.log(myArray + " is uniform: " + isUniform(myArray));




console.log("\n*******\nAdd up an array:");

function sumArray(anArray){
	var sum = 0;
	anArray.forEach(function(num){
		sum+=num;
	});
	return sum;
}

myArray = [1, 2, 3];
console.log("The sum of " + myArray + " is " + sumArray(myArray));

myArray = [10, 3, 10, 4];
console.log("The sum of " + myArray + " is " + sumArray(myArray));

myArray = [-5, 100];
console.log("The sum of " + myArray + " is " + sumArray(myArray));




console.log("\n*******\nReturn the maximum of an array:");

function max(anArray){
	var max = anArray[0];
	anArray.forEach(function(num){
		if(num>max){
			max = num;
		}
	});
	return max;
}

myArray = [1, 2, 3];
console.log("The max of " + myArray + " is " + max(myArray));

myArray = [10, 3, 10, 4];
console.log("The max of " + myArray + " is " + max(myArray));

myArray = [-5, 100];
console.log("The max of " + myArray + " is " + max(myArray));