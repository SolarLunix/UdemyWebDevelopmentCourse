var express = require("express");
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.send("You have been redirected here after an incorrect url," +
        "but you're still amazing!")
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== Server Started! ====");
});