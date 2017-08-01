var express = require("express");
var app = express();

// Home
app.get("/", function(req, res){
    res.send("Welcome to my assignment!");
});

// Animal voices!
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "OINK",
        cow: "MOO",
        dog: "WOOF",
        cat: "MEOW",
        fox: "YA CHA CHA CHA CHAF CHAF CHAF CHAF CHAF"
    }
    
    if (sounds.hasOwnProperty(animal)) {
        var response = "The " + animal + " says, \"" + sounds[animal] + "!\"";
    }else{
        var response = "I don't know what the " + animal + " says!";
    }
    
    res.render(response);
});

//The repeater
app.get("/repeat/:word/:num", function(req, res){
   var word = req.params.word;
   var isNum = req.params.num;
   if(isNaN(isNum)){
       res.send("I cannot repeat \'" + word + "\' with the value \'" + isNum + "\".");
   }else{
       var response = "";
       var num = +isNum;
       for(var i = 0; i < num; i++){
           response += " " + word;
       }
       res.send(response);
   }
});


// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.send("Sorry, page not found! What are you doing with your life?")
})

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== Server Started! ====");
});