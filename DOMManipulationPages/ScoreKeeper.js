var p1 = document.getElementById("p1");
var p1display = document.getElementById("p1score");
var p1score = 0;

var p2 = document.getElementById("p2");
var p2display = document.getElementById("p2score");
var p2score = 0;

var reset = document.getElementById("reset");
var scoreSelect = document.getElementById("maxpoints");
var maxScore = 5;

var gameOver = false;

p1.addEventListener("click", function(){
	if(!gameOver){
		p1score++;
		updateScores();
		if(p1score >= maxScore){
			p1display.classList.add("winner");
			gameOver = true;
		}
	}
});

p2.addEventListener("click", function(){
	if(!gameOver){
		p2score++;
		updateScores();
		if(p2score >= maxScore){
			p2display.classList.add("winner");
			gameOver = true;
		}
	}
});

reset.addEventListener("click", function(){
	p1score = 0;
	p2score = 0;
	updateScores();
	gameOver = false;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
});

scoreSelect.addEventListener("change", function(){
	maxScore = Number(scoreSelect.value);
});

function updateScores(){
	p1display.textContent = p1score;
	p2display.textContent = p2score;
}