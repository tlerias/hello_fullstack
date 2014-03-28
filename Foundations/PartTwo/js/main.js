$(function(){

	var guesses = 5;
	var currentGuess = null;
	var hotOrCold = isHotOrCold();
	var allUserGuesses = [];

	var goalNumber = numberRandomizer();
	$('#playersGuess').on('click', function(){
 		currentGuess = submitNumberToGuesses();
 		if (goalNumber === currentGuess){
			correct();
		}
		else if (guesses <= 0){
			startOver();
		}
		else{

			$("#result").text("I don't think you can do it.");
			$('#hint').text(isHotOrCold());
			isValidNumber();
			doesExist();
			allUserGuesses.push(currentGuess);

		}
		incorrect();



	})

	$('#actions').find('.give-up').on('click', function(){
		giveUp();
	});

	$('#actions').find('.play-again').on('click', function(){
		startOver();
	});


	function numberRandomizer()
	{
		return Math.floor(100 * Math.random() + 1);
		
	}

	function submitNumberToGuesses()
	{
		return parseInt($("#guessing_field").find('input').val(), 10);
		
	}

	function correct(){
	  $("#result").text("You win!");
	  $("#hint").text("Congrats! Play again?");
	}

	function incorrect(){
		guesses--;
		$("#guesses").html(guesses);
		if (guesses == 0){
			$("#result").text("Sorry, you lose. "); 
			$("#hint").text("Press 'Play Again' to start a new game.");
			$('body').css('background', 'red');
		}
	}


	function isHotOrCold(){
		var diff = Math.abs(goalNumber - currentGuess);
		return 5 >= diff ? "OW OW, You're on fire! " + higherOrLower() : 10 >= diff ? "You're Hot. " + higherOrLower() : 15 >= diff ? "You're Warm. " + higherOrLower() : 25 >= diff ? "You're Cold. " + higherOrLower() : "Ice, Ice Baby! " + higherOrLower();

	}

	function higherOrLower() {
	    return currentGuess  > goalNumber ? "Your guess was too high." : "Your guess was too low.";
	}

	function giveUp(){
		$("#result").html("Sorry, you lose. The answer was <b>" + goalNumber + "</b>");
		$('body').css('background', 'red');
	}

	function startOver(){
		guesses = 5;
		var goalNumber = numberRandomizer();
		var allUserGuesses = [];
	   	$("#guesses").text(guesses);
		$("#result").text("Are you ready?");
		$("#hint").text(" ");
		location.reload();

	}

	function doesExist(){
		for (var i = 0; i <= allUserGuesses.length; i++){
			if (allUserGuesses[i] === currentGuess){
				$("#result").text("Don't be silly! (-_-)");
				$('#hint').text('You Already Guessed That Number!').addClass('alert alert-success');
			}

		}
	}

	function isValidNumber(){

		return isNaN(currentGuess) || 100 < currentGuess || 1 > currentGuess ? $('#hint').text("That's not a valid number. You lose a guess.").addClass('alert') : $('#hint').removeClass('alert');
	}


});