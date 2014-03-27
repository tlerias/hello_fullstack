var guesses = 5;
var goalNumber = numberRandomizer();
var currentGuess = submitNumberToGuesses();
var hotOrCold = isHotOrCold();
// window.onload(startOver());

function numberRandomizer()
{
	return Math.floor(100 * Math.random() + 1);
	
}

function submitNumberToGuesses()
{
	return parseInt(document.getElementById("playersGuess").value, 10);
	
}

function correct(){
  $("#result").html("You are correct!");
}

function incorrect(){
  $("#result").html("<b>" + hotOrCold + "</b>");
    guesses--;
   document.getElementById("guesses").innerHTML = guesses;
    if (guesses == 0){
     $("#result").html("Sorry, you lose. "); 
   }
}

function isHotOrCold(){
	var diff = Math.abs(goalNumber - currentGuess);
	return 5 >= diff ? "OW OW, You're on fire! " + higherOrLower() : 10 >= diff ? "Hot " + higherOrLower() : 15 >= diff ? "Warm " + higherOrLower() : 25 >= diff ? "Cold " + higherOrLower() : "Ice, Ice Baby! " + higherOrLower();

}

function higherOrLower() {
    return currentGuess  > goalNumber ? "Your guess was too high." : "Your guess was too low.";
}

function giveUp(){
	$("#result").html("Sorry, you lose. The answer was <b>" + goalNumber + "</b>");
}

function startOver(){
	guesses = 5;
	numberRandomizer();
	document.getElementById("guesses").innerHTML = guesses;
	$("#result").html("Are you ready?");
}


if (currentGuess === goalNumber){
	correct();
}
else{
	incorrect();

};