var express     = require("express"), 
    request     = require('request'),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

// ENVIRONMENT SET UP
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/references_");

// SCHEMAS
var postSchema = mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

var userSchema = mongoose.Schema({
   email: String,
   name: String,
   posts: [
       {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Post"
       }]
});
var User = mongoose.model("User", userSchema);

/*
//CREATE USER
var newUser = new User({
    email: "blingbling@gmail.com",
    name: "Tom"
});

newUser.save(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

//ANOTHER WAY:
User.create({
    email: "GovernmentIsUseless@gmail.com",
    name: "Ron"
}, function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
*/

/*
Post.create({
    title: "Treat Yo' Self",
    content: "Doesn't matter how much money you have, take at least a day a month and TREAT YO' SELF BOO! Debt doesn't follow you to the grave!"
}, function(err, post){
    if(err){
        console.log(err);
    } else {
        User.findOne({name: "Tom"}, function(err, user){
            if(err){
                console.log(err);
            }else{
                user.posts.push(post);
            }
            
            user.save(function(err, user){
                if(err){
                    console.log(err);
                } else {
                    console.log(user);
                }
            });
        });
    }
});
*/

/*
//HOW TO ADD AN EXISTING POST TO A USER
User.findOne({name:"Tom"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        Post.findOne({title: "Treat yo Self"}, function(err, post){
            if(err){
                console.log(err);
            }else{
                user.posts.push(post);
                
                user.save(function(err, user){
                    if(err){
                        console.log(err);
                    }else{
                        console.log(user);
                    }
                });
            }
        });
    }
})
*/

/*
//ADDING A NEW POST TO A USER
User.findOne({name:"Tom"}, function(err, user){
   if(err){
       console.log(err);
   } else {
       user.posts.push({
           title: "Rent-A-Swag",
           content: "Tired of your little one growing out of his or her clothing all the time? Still want them to look nice but don't want to pay big bucks for something that won't fit them next year? Rent-A-Swag has you covered!"
       });
       
       user.save(function(err, user){
           if(err){
               console.log(err);
           }else{
               console.log(user);
           }
       });
   }
});
*/

User.findOne({name:"Tom"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});

