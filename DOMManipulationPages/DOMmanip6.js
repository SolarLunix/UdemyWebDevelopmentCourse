var count = 0;

var img = document.getElementsByTagName("img")[0];

var imgs = ["https://solarlunix.github.io/Assets/Images/RyanMelissa1.jpg",
			"https://solarlunix.github.io/Assets/Images/RockoMelissa1.jpg"]

setInterval(function(){
	if(count === (imgs.length - 1)){
		count = -1;
	}
	count++;

	img.setAttribute("src", imgs[count]);
}, 2500);