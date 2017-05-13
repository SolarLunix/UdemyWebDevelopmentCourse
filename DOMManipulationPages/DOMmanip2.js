var tag = document.getElementById("highlight");
tag.style.background = "yellow";

//Selects multiple items and makes them "list like" but you cannot go through them with a forEach loop
var tags = document.getElementsByClassName("bolded");
var allListItems = document.getElementsByTagName("li");
var allH1 = document.getElementsByTagName("h1");

console.log("Bolded tags: " + tags.length);
console.log("All List Items: " + allListItems.length);
console.log("H1s: " + allH1.length);

//Returns only one element
var newTag = document.querySelector("#highlight");
newTag.style.color = "purple";

var firstBolded = document.querySelector(".bolded");
firstBolded.style.color = "red";

var firstH1 = document.querySelector("h1");
firstH1.style.color = "pink";

var specialLink = document.querySelector("li a.special");
specialLink.style.color = "white";

//Returns multiple elements 
var bolded = document.querySelectorAll(".bolded");
console.log("Bolded tags: " + bolded.length);