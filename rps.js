var rounds = prompt("How many rounds of Rock-Paper-Scissors do you want to play?");
//if answer is Cancel or zero, exit game
if (!(rounds == null)) {
//check if user entered a number and a number greater than zero for rounds
    test = isNaN(rounds)
//checks to see if uthe user enters a valid number
    while((test == true)) {
        alert("Number of Rounds must be a number");
        var rounds = prompt("How many rounds of Rock-Paper-Scissors do you want to play?");
        if (rounds == null) {
//if user presses cancel, exits script
            alert("We'll play later. See ya!");
            break;
        } else if (test == 0) {
//well, for some reason the user could have selected 0 rounds...
            alert("The number of rounds needs to be greater than zero");
        } else {
//changes the value of test boolean to get out of loop... or not
            test = isNaN(rounds);
        }
    }
//make sure the value used for # rounds is an integer
if (rounds > 0) {
//makes sure # of rounds is integer
    numberOfRounds = +rounds - (+rounds % 1)
//set tie, computer wins and user wins
    var tie = 0
    var humanWin = 0
    var computerWin = 0
//loop for the number of rounds
    for (let i = 0; i < (+numberOfRounds); i++) {
        const options = ["ROCK", "PAPER", "SCISSORS"];
//Set HumanError to true to go into loop if player enters invalid option
        var humanError = true
//start loop for input error
        while (humanError == true) {
    //Player's input
            let human = prompt("Rock, paper or Scissors? Your choice!");
    //if users selects cancel, exit game
           if (human === null) {
                alert("We are sad to see you go. Good-bye!");
                break;
            }
            //changes input to uppercase to check if it is a valid option
            var playerChoice = human.toUpperCase();
//checks if player selected a valid option
            if (options.includes(playerChoice) === false) {
//alerts player that option is not valid
                alert("You have to choose Rock,Paper or Scissors. Try again");
//if option is not valid, go back to input    
            } else {
//switch humanError to false to get out of loop
                humanError = false
            }
        }
//Computer makes its choice
        var computerChoice = Math.floor(Math.random() * options.length);
//get results to check who wins
        let result = ("" + options.indexOf(playerChoice) + computerChoice);
//check result to inform who wins
    switch (result) {
            case("00"):
                alert(playerChoice + " x " + playerChoice + ". It is a tie!");
                tie = +tie + 1
                break;
            case "01":
                alert(playerChoice + " x " + options[computerChoice] + ". Computer WINS. You loose!");
                computerWin = +computerWin + 1
                break;
            case "02":
                alert(playerChoice + " x " + options[computerChoice] + ". Computer LOST. You WIN! Well done!");
                humanWin = +humanWin + 1 
                break;
            case "10":
                alert(playerChoice + " x " + options[computerChoice] + ". Computer LOST. You WIN! Well done!");
                humanWin = +humanWin + 1
                break;
            case "11":
                alert(playerChoice + " x " + playerChoice + ". It is a tie!");
                tie = +tie + 1
                break;
            case "12":
                alert(playerChoice + " x " + options[+computerChoice] + ". Computer WINS. You loose!");
                computerWin = +computerWin + 1 
                break;
            case "20":
                alert(playerChoice + " x " + options[+computerChoice] + ". Computer WINS. You loose!");
                computerWin = +computerWin + 1
                break;
            case "21":
                alert(playerChoice + " x " + options[+computerChoice] + ". Computer LOST. You WIN! Well done!");
                humanWin = +humanWin + 1
                break;
            case "22":
                alert(playerChoice + " x " + playerChoice + ". It is a tie!");
                tie = +tie + 1
                break;
        }
 //shows scoreboard
 alert("#Games: " + (i + 1) + "/" + numberOfRounds + " | " + "COMP WINS: " + computerWin + " | " + "HUMAN Wins: " + humanWin);
    } 
//shows final message
    if (computerWin < humanWin) {
        alert("Congratulations, YOU WON! See you next time!");
    } else if (computerWin = humanWin) {
        alert("It's a tie! See you next time!")
    } else {
        alert("Oh no, you lost! See you next time!")
    }
}
} else {     
 //message if user presses cancel
    alert("We'll play later. See ya!");
}