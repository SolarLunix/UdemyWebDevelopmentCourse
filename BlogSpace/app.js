//REQUIREMENTS
var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
    
// ENVIRONMENT SET UP
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/blog_space");

//SCHEMA SET UP
var BlogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type:Date, default:Date.now()}
});

var Blog = mongoose.model("Blog", BlogSchema);

//ROUTES
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            res.render('index', {blogs:blogs});
        }
    });
});

// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.redirect("/blogs")
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== BlogSpace Server Started! ====");
});