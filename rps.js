const Options = ["ROCK", "PAPER", "SCISSORS"];
//Set HumanError to true to go into loop if player enters invalid option
let humanError = true
//start loop for input error
while (humanError == true) {
    //Player's input
    let human = prompt("Rock, paper or Scissors? Your choice!");
    //if   users selects cancel, exit game
    if (human === null) {
        alert("We are sad to see you go bye");
        break;
    }
    //changes input to uppercase to check if it is a valid option
    let playerChoice = human.toUpperCase();
//if user selects cancel, leave the game

//checks if player selected a valid option
    if (Options.includes(playerChoice) == false) {
//alerts player that option is not valid
        alert("You have to choose Rock,Paper or Scissors. Try again");
//if option is not valid, go back to input    
    } else {
//switch humanError to false to get out of loop
    humanError = false
    //break;
    }
}
