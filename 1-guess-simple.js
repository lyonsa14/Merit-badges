/* Guess Game:merit badge by arianna 
 */
var answer = Math.floor(Math.random()*100)+1;
alert(answer);
var guess = 0;
while (guess != answer) {
	guess = prompt("Guess my number 1-100");
	if (guess=="q") break; 
	if (guess<answer) alert("Too low.");
	else if (guess>answer) alert("Too high!");
}
if (guess=="q") alert("You quit!!!");
else alert("You got it!!!");