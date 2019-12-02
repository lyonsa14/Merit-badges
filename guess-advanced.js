/* Guess Game:merit badge by arianna 
 */
var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var totalTurns = 0;
var games = 0;
var turns = 0;
while (guess != answer) {
	guess = prompt("Guess my number 1-100");
	if (guess=="q") break; 
	if (validator(guess)==true){
		turns++ ;
		if (guess<answer) alert("Too low.");
		else if (guess>answer) alert("Too high!");
	}
 	else alert("Invalid guess, retry!");

 	gameStats();
 if (guess=="q") alert("You quit!!!");
}
 	function validator(guess){
 		if (guess > 0 && guess < 101) return true;
 		else return false;
 	}


	function gameStats() {
		if (guess==answer)  alert("You guessed it in " +turns+ " turns")
  		totalTurns = totalTurns+turns;
  		var averageTurns = 0;
  		averageTurns = totalTurns/games;
  		alert("You won " +games+ " games with an average of " +averageTurns+ " turns per game!")
	}

	var again = newGame();
	function newGame(){
		again = confirm("Would you like to play again?");
		if (again == false) alert("Thank you for playing!");
		return true;
	}
