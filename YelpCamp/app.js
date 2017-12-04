var express     = require("express"), 
    request     = require('request'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    Camp        = require('./models/camps'),
    Comment     = require('./models/comments'),
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
            res.render('camps/index', {campgrounds:camps});
        }
    });
});

app.get('/campgrounds/new', function(req, res) {
    res.render('camps/new') ;
});

app.get('/campgrounds/:id', function(req, res) {
    Camp.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
       if(err){
           console.log(err);
           res.redirect('/campgrounds');
       }else{
           res.render('camps/show', {camp: foundCamp});
       }
    });
});

app.get('/campgrounds/:id/comments/new', function(req, res) {
    Camp.findById(req.params.id).populate("comments").exec(function(err, foundCamp){
       if(err){
           console.log(err);
           res.redirect('/campgrounds');
       }else{
           res.render('comments/new', {camp: foundCamp});
       }
    });
});

// Post requests
app.post('/campgrounds', function(req, res){
    var aCamp = req.body.camp;
    Camp.create(aCamp, function(err, camp){
        if(err){
            console.log(err);
            res.redirect('/campgrounds/new');
        }else{
            res.redirect('/campgrounds');
        }
    });
});

app.post('/campgrounds/:id/comments', function(req, res){
    var aComm = req.body.comment;
    Comment.create(aComm, function(err, comm){
        if(err){
            console.log(err);
            res.redirect('/campgrounds/' + req.params.id + '/comments/new');
        } else {
            Camp.findById(req.params.id, function(err, camp){
                if(err){
                    console.log(err);
                    res.redirect('/campgrounds/' + req.params.id + '/comments/new');
                } else {
                    camp.comments.push(comm);
                    camp.save();
                    res.redirect('/campgrounds/' + req.params.id);
                }
            });
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