var wins = 0;
var loses = 0;
var ties = 0;
// Actual start of the game begins here with the Alert Hello!
startGame();

function startGame() {
alert("Hello")
userChoice =prompt("Choose your Weapon! R, P, or S?");
console.log(userChoice);
var choice=["R","P","S"];
var random=Math.floor(Math.random() * choice.length);
compChoice = choice[random];
console.log(compChoice);
compareAnswers(userChoice,compChoice);
Again();
}

function compareAnswers(userChoice, compChoice) {
    if (userChoice === compChoice) {
       alert("We have Tied!");
       ties+=1; 
    }
        else if (userChoice === "R", compChoice=== "P") {
            alert("You Lose!");
            loses +=1;
        } 
        else if (userChoice === "P" , compChoice === "R") {
            alert("You Win!");
            wins +=1;
            }
        else if (userChoice === "P" , compChoice === "S") {
            alert("You Lose");
            loses +=1;

        }
        else if (userChoice === "S" , compChoice === "P") {
            alert("You Win!");
            wins +=1;

        }
        else if (userChoice === "S" , compChoice === "R") {
            alert("You Lose!");
            loses +=1;

        }
        else if (userChoice === "R" , compChoice === "S") {
            alert("You Win!");
            wins +=1;
        }

    console.log(wins, loses, ties);
}
    
      


function Again() {
var playAgain =confirm("Would you like to play again?");
    if (playAgain === true) {
    startGame();
}
    else {
        document.write("Wins: ",wins +  "___Losses: ",loses + "___Ties: " ,ties  +   "__________Ok. Sorry To See You Go.");
    }
}

 

