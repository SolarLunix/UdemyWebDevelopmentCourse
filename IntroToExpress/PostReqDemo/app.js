var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


var friends=['Blake', 'Rose', 'Lily', 'Hillary'];

app.get('/', function(req, res) {
   res.render('home'); 
});

app.get('/friends', function(req, res) {
   res.render('friends', {friends:friends}); 
});

app.post('/addfriend', function(req, res){
    var friend = req.body.friend;
    friends.push(friend);
    res.redirect('/friends');
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