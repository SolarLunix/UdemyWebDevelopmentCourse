var express     = require("express"), 
    request     = require('request'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Camp        = require('./models/camps'),
    Comments    = require('./models/comments'),
    seedDB      = require('./seeds');

// ENVIRONMENT SET UP
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/yelp_camp");

//Seed the Database
seedDB();

// Get Requests
app.get('/', function(req, res) {
   res.render('home'); 
});

app.get('/campgrounds', function(req, res) {
    Camp.find({}, function(err, camps){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            res.render('index', {campgrounds:camps});
        }
    });
});

app.get('/campgrounds/new', function(req, res) {
    res.render('new') ;
});

app.get('/campgrounds/:id', function(req, res) {
    Camp.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
       if(err){
           console.log(err);
           res.redirect('/error');
       }else{
           res.render('show', {camp: foundCamp, Comments: Comments});
       }
    });
});

// Post requests
app.post('/campgrounds', function(req, res){
    var name = req.body.name;
    var img = req.body.img;
    var desc = req.body.desc;
    Camp.create({"name": name, "img": img, "desc": desc}, function(err, camp){
        if(err){
            console.log(err);
            res.redirect('/campgrounds/new');
        }else{
            res.redirect('/campgrounds');
        }
    });
});

// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.redirect("/");
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== YelpCamp Server Started! ====");
});