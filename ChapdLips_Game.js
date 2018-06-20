//ChapdLips Game
//By Rick Maya

/*Using everything we have learned so far, create your own text adventure game.  
Or, build on the zombie adventure game we created in our last lesson.  
Maybe you want to customize the ending based on the weapon choice, or continue the story.  
Choose from the following to build your game: 

Strings
Numbers
Variables
If/Else
Math.round()
Math.random()
prompt()
alert()
confirm()
Operators like ===, !=, &&, >,<,+,-,*,/
*/

alert("It's tournament day.  You've been practicing everyday for the past 2 months with your crew and today you'll be battling for the #1 spot!");

//choosing order of strategy
var strategy = prompt("First up, prelims.  It's a 3 on 3, who do you choose to go first? Al Grande, MikieShadow, or Rikstylez?");
//Judge Score
var score = Math.round(Math.random() * 10);
var enemyScore = Math.round(Math.random() * 10);

alert(strategy + " " + "Goes out first!");
alert("The Judges score that a " + score);

//ChapdLips score
if(score === 10){
  alert("Smokin!");
}
else if(score < 10 &&  score > 5){
  alert("Lets Go!");
}
else {
  alert("Pick it up!");
}

alert("The other crew does a routine against your crew mate.  The judge gives that a score of " + enemyScore);
//Competitor score
if(enemyScore === 10){
  alert("They're winning.");
}
else if(enemyScore < 10 && enemyScore > 5){
  alert("Not bad.");
}
else {
  alert("We got this!");
}
