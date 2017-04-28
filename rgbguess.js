var colors = randomColors(numOfSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var numOfSquares = 6;
var modeButtons = document.querySelectorAll(".mode");

//adds listeners to mode buttons
for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numOfSquares = 3;
		} else {
			numOfSquares = 6;
		}
		resetGame();
	});
}

//iterates through squares and generates random colors for each.
for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

// resets game
resetButton.addEventListener("click", function(){
	resetGame();
});

//assigns picked color to variable
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

//changes sqaure colors to different random colors
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

//pushes rgb colors to array
function randomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomRGB());
	}
	return arr;
}

//generates random rgb colors
function randomRGB(){
	return "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
}

//picks color to guess from array
function pickColor(){
	return colors[Math.floor(Math.random() * colors.length)];
}

//resets game
function resetGame(){
	colors = randomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
	}
	
	}
	h1.style.background = "steelblue";
}



