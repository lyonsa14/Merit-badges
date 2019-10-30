/* Guess Game:merit badge by arianna 
 */
var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while (guess != answer) {
	guess = prompt("Guess my number 1-100");
	if (guess=="q") break; 
	if (validator(guess)==true){
	turns++
	if (guess<answer) alert("Too low.");
	else if (guess>answer) alert("Too high!");
}
 else alert("Invalid guess, retry!");
}
 if (guess == answer) alert("you got it in " +turns+ " turns.");
 if (guess=="q") alert("You quit!!!");

 	function validator(guess){
 		if (guess > 0 && guess < 101) return true;
 		else return false;
 	}


