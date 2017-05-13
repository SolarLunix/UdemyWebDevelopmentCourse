var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hello, Welcome to my page");
});

app.get("/bye", function(req, res){
    res.send("Goodbye, thanks for stopping by!");
});

app.get("/dogs", function(req, res){
    res.send("Welcome to the dogs page!");
})

app.get("/dogs/:breed", function(req, res){
    var breed = req.params.breed;
    res.send("You've reached the almighty " + breed + " page!");
});

app.get("/dogs/:breed/comments/:title", function(req, res){
    res.send("I'm glad you wish to make a contribution.");
});


// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.send("You have been redirected here after an incorrect url," +
        "but you're still amazing!")
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== Server Started! ====");
});