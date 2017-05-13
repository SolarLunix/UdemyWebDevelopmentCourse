//.text()
var h1 = $("h1");
var oldh1 = h1.text();
console.log(oldh1);
console.log($("ul").text());
console.log($("li").text());
h1.text("TITLE CHANGE!")
console.log(h1.text());
h1.text(oldh1)

console.log("---------------");

//.html()
var ul = $("ul");
var oldul = ul.html();
console.log(oldul);
ul.html("<li>I hacked your list!</li>\n<li>Phantom is more adorable than Rusty</li>");
console.log(ul.html());

var li = $("li");
li.html("<em>Phantom</em> is the best");
console.log(li.html());
ul.html(oldul);

var src1 = $("img").attr("src");
var imgHtml = "<img src=\"" + src1 + "\">";
var scareImg = "<img src=\"https://s-media-cache-ak0.pinimg.com/originals/d8/97/4c/d8974cc76a60fc28897b3c6acd7ba648.jpg\">";
imgHtml = imgHtml + "\n" + scareImg + "\n" + imgHtml;
$("#photo").html(imgHtml);
$("img").css("width", "32%");
console.log($("#photo"));

console.log("---------------");

//.addClass, .removeClass, .toggleClass
$(".wrong").removeClass("wrong").addClass("right");
h1.toggleClass("right");
setInterval(function(){
	$("ul").toggleClass("wrong");
	h1.toggleClass("right");
}, 1000);

//.attr()
var img = $("img");
var src1 = img.attr("src");
console.log(src1);
var scary = "false"

setInterval(function(){
	if(scary){
		img.last().attr("src", src1);
	}else{
		img.last().attr("src", "https://s-media-cache-ak0.pinimg.com/originals/d8/97/4c/d8974cc76a60fc28897b3c6acd7ba648.jpg");
	}
	scary = !scary;
}, 2500);

console.log($("input").attr("type"));
$("input").attr("type", "color");

console.log("---------------");

//.val()
console.log($("input").val());
$("input").attr("type", "text");



