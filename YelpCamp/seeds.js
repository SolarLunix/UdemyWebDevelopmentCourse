var mongoose    = require("mongoose"),
    Camp        = require("./models/camps"),
    Comment     = require("./models/comments");
    
var data = [
    {   
        name: "Camp Valt Tec",
        img: "https://eteknix-eteknixltd.netdna-ssl.com/wp-content/uploads/2016/07/fallout-800x450.jpg",
        desc: "Teaching your children essential wasteland survival skills, as well as Valt Leadership so tht oneday they may be the Overseer."
    },{   
        name: "Moonlight Retreat", 
        img: "https://c1.staticflickr.com/9/8002/7299820870_e78782c078_b.jpg", 
        desc: "A beautiful campground where you can see the stars and moon without the pesky glow of city lights."
    },{   
        name: "Seaside Shores",
        img: "https://1429665203.rsc.cdn77.org/wp-content/uploads/olapeter/2017/11/16/naija-moonlight-camp.jpg",
        desc: "Camp on your own little beach."
    },{   
        name: "Glamping Central",
        img: "https://www.pawsup.com/storage/static/luxury-tents/moonlight-camp/gallery-01.jpg",
        desc: "Take some time to glamour camp in your own creatively named luxury tent."
    },{   
        name: "Camp",
        img: "https://upload.wikimedia.org/wikipedia/en/9/91/CampWWElogo.png",
        desc: "Your typical camp, usually reserved for scouting adventures"
    },{   
        name: "Camp Kyle",
        img: "http://www.chicagonow.com/wee-windy-city/files/2014/06/Tent-Camping-Image.jpg",
        desc: "Camp Kyle, where the owner's name is Kyle and he lets you camp on his land!"
    },{   
        name: "Teen Retreat",
        img: "https://www.readerstheater.com/images/WebIcon.gif",
        desc: "Where teens can camp - boys and girls in seperate tents unless family members, all staff trained in helping your teen thrive."
    },{   
        name: "Scout Days",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FPpBeokGTdGQ_2JYRGa6DxJEF-bVnehkEuoG5KfVd2ICyPeP",
        desc: "Our Scout Days Camp allows your child to thrive and learn essential survival skills."
    }
]
    
function seedDB(){
    // Clear the Database
    Camp.remove({}, function(err){
        if(err){
            console.log(err);
        }else{
            console.log("Database Cleared.");
        }
        
        //Add some fresh data to the campground page
        data.forEach(function(i){
            Camp.create(i, function(err, camp){
                if(err){
                    console.log(err);
                }else{
                    console.log(camp.name + " added.");
                    
                    Comment.create({text: "I loved everything about this camp!", author: "Jamie"}, function(err, comm){
                        if(err){
                            console.log(err);
                        }else{
                            camp.comments.push(comm);
                            camp.save();
                            console.log(comm.author + " created a comment on " + camp.name + ".");
                        }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;
