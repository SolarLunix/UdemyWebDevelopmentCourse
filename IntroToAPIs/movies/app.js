var express = require("express");
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var url="http://www.omdbapi.com/?s=Pennsylvania"
var searchTerm="Pennsylvania"


//GET REQUESTS
app.get('/results', function(req, res) {
    searchTerm = req.query.search;
    url = "http://www.omdbapi.com/?s=" + searchTerm;
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {movies:parsedData, search:searchTerm})
        }else if(error){
            console.log('Something went wrong!');
            console.log(error);
        }else{
            console.log('Bad Status Code: ' + response.statusCode);
        }
   });
});

app.get("*", function(req, res){
    res.render("search");
});


// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== Server Started! ====");
});