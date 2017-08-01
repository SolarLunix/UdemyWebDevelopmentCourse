var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cats_database");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    normal_mood: String
});

var Cat = mongoose.model("Cat", catSchema)

/*
//First Cat
var rosey = new Cat({
    name: "Rosey",
    age: 14,
    normal_mood: "Happy"
});


rosey.save(function(err, cat){
    if (err){
        console.log("Something went wrong!");
    } else {
        console.log("The cat was saved!");
        console.log(cat)
    }
});
*/

Cat.create({
    name: "Button",
    age: 1,
    normal_mood: "Adorable",
}, function(err, cat){
    if(err){
        console.log("There was an error saving the cat!");
    }else{
        console.log("The cat was saved! Info below:");
        console.log(cat);
    }
});


console.log("ALL OF THE CATS:");

Cat.find(function(err, cats){
    if(err){
        console.log("There was an error!")
    } else{
        console.log(cats); 
    }
});
