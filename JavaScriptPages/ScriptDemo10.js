var catSpace = {
	name: "Belle",
	speak: function(){
		console.log(this.name + ": Meow!");
	}
}

var dogSpace = {
	name: "Fido",
	speak: function(){
		console.log(this.name + ": Woof!");
	}
}

console.log(catSpace.name + " Speak!");
catSpace.speak();

console.log(dogSpace.name + " Speak!");
dogSpace.speak();