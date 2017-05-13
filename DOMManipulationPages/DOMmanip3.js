var try1 = document.getElementById("first");
console.log("Try 1:");
console.log(try1);

var try2 = document.getElementsByClassName("special");
console.log("Try 2:");
console.log(try2);
console.log(try2[0]);

var try3 = document.getElementsByTagName("p");
console.log("Try 3:");
console.log(try3);
console.log(try3[0]);

var try4 = document.querySelector("p.special");
console.log("Try 4:");
console.log(try4);

var try5 = document.querySelector("p");
console.log("Try 5:");
console.log(try5);

var try6 = document.querySelector("#first");
console.log("Try 6:");
console.log(try6);

var try7 = document.querySelectorAll("p");
console.log("Try 7:");
console.log(try7);
console.log(try7[0]); 

console.log("\n\nThere are probably more ways to select the first <p> on DOMmanip3, but I wanted to move on");