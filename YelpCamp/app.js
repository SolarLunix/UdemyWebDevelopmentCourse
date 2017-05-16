var express = require("express");
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
    {'name': 'Lazy K Campground',
        'img': 'http://images.clipartpanda.com/gunfire-clipart-camping-clip-art-5.gif'
    },
    {'name': 'New Castle Lake',
        'img': 'http://watchwrestling.in/wp-content/uploads/2016/05/latest.png'
    },
    {'name': 'Brokeback Mountain',
        'img': 'http://ginazammit.files.wordpress.com/2012/06/camp.jpg'
    }];

// Get Requests
app.get('/', function(req, res) {
   res.render('index'); 
});

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds', {campgrounds:campgrounds});
});

app.get('/campgrounds/new', function(req, res) {
   res.render('campgroundsNew') ;
});

// Post requests
app.post('/campgrounds', function(req, res){
   
   res.redirect('/campgrounds'); 
});

// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.send("You have been redirected here after an incorrect url," +
        "but you're still amazing!")
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== YelpCamp Server Started! ====");
});