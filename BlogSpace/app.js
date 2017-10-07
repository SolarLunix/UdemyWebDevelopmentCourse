//REQUIREMENTS
var express = require("express"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");
    
// ENVIRONMENT SET UP
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost/blog_space");

//SCHEMA SET UP
var BlogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    date: {type:Date, default:Date.now()}
});

var Blog = mongoose.model("Blog", BlogSchema);

//GET ROUTES
app.get("/blogs", function(req, res) {
    console.log("Home");
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            res.render('index', {blogs:blogs});
        }
    });
});

app.get("/blogs/new", function(req, res) {
   res.render("new"); 
});

app.get("/blogs/:id", function(req, res) {
   Blog.findById(req.params.id, function(err, blog){
       if(err){
           console.log(err);
           res.redirect('/');
       }else{
           res.render('show', {blog:blog}); 
       }
   });
});

app.get("/blogs/:id/edit", function(req, res) {Blog.findById(req.params.id, function(err, blog){
       if(err){
           console.log(err);
           res.redirect('/');
       }else{
           res.render('edit', {blog:blog}); 
       }
   });
});

//POST ROUTES
app.post("/blogs", function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else {
            res.redirect("/blogs");
        }
    });
});

//PUT ROUTES
app.put("/blogs/:id", function(req, res){
    console.log('Put request');
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if(err){
            res.redirect("/");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

//DELETE ROUTES
app.delete("/blogs/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
       if(err){
           console.log(err);
           res.redirect('/');
       }else{
           res.redirect('/blogs'); 
       }
   });
});

// Invalid URL - Make sure this goes last!
app.get("*", function(req, res){
    res.redirect("/blogs");
});

// Standard listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("==== BlogSpace Server Started! ====");
});