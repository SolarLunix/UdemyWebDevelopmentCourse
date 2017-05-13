var express = require("express");
var app = express()

app.use(express.static("public"));
app.set("view engine", "ejs")

// ========================================
//              Normal Pages 
// ========================================
app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlove/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
   var posts = [
       {author: "Stacy", title: "Roses aren't always red!"},
       {author: "Blake", title: "Cats rule and dogs drool!"},
       {author: "Stan", title: "Dogs rule and cats drool!"}
    ];
    
    res.render("posts", {posts: posts});
});

// ========================================
//            Finishing Touches
// ========================================
// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.send("Sorry, page not found! What are you doing with your life?")
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== Server Started! ====");
});