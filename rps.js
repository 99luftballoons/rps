var rounds = prompt("How many rounds of Rock-Paper-Scissors do you want to play?");
console.log(rounds)
//if answer is Cancel or zero, exit game
if (!(rounds == null)) {
//check if user entered a number for rounds
    debugger;
    test = isNaN(rounds)
    while((test == true)) {
        debugger;
        alert("Number of Rounds must be a number");
        var rounds = prompt("How many rounds of Rock-Paper-Scissors do you want to play?");
        if (rounds == null) {
            alert("We play later. See ya!");
            break;
        } else if (test == 0) {
            alert("The number of rounds needs to be greater than zero");
        } else {
            test = isNaN(rounds);
        }
        console.log(rounds)
    }
//make sure the value used for # rounds is an integer
if (rounds > 0) {
    numberOfRounds = +rounds - (+rounds % 1)
    console.log(numberOfRounds)
//check if rounds  is bigger than zero and is an integer. I fit is not, asks for new prompt
    const options = ["ROCK", "PAPER", "SCISSORS"];
//set tie, computer wins and user wins
    var tie = 0
    var humanWin = 0
    var computerWin = 0

//Set HumanError to true to go into loop if player enters invalid option
    var humanError = true
//start loop for input error
    while (humanError == true) {
    //Player's input
        let human = prompt("Rock, paper or Scissors? Your choice!");
    //if users selects cancel, exit game
        console.log(human)
        if (human === null) {
            alert("We are sad to see you good-bye!");
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
            tie = tie + 1
            break;
        case "01":
            alert(playerChoice + " x " + options[computerChoice] + ". Computer WINS. You loose!");
            computerWin = computerWin + 1
            break;
            case "02":
            alert(playerChoice + " x " + options[computerChoice] + ". Computer LOST. You WIN! Well done!");
            humanWin = humanWin + 1
            break;
        case "10":
            alert(playerChoice + " x " + options[computerChoice] + ". Computer LOST. You WIN! Well done!");
            humanWin = humanWin + 1
            break;
        case "11":
            alert(playerChoice + " x " + playerChoice + ". It is a tie!");
            tie = tie + 1
            break;
        case "12":
            alert(playerChoice + " x " + options[+computerChoice] + ". Computer WINS. You loose!");
            computerWin = computerWin + 1
            break;
        case "20":
            alert(playerChoice + " x " + options[+computerChoice] + ". Computer WINS. You loose!");
            computerWin = computerWin + 1
            break;
        case "21":
            alert(playerChoice + " x " + options[+computerChoice] + ". Computer LOST. You WIN! Well done!");
            humanWin = humanWin + 1
            break;
        case "22":
            alert(playerChoice + " x " + playerChoice + ". It is a tie!");
            tie = tie + 1
            break;
        }
    }
} else {     
    alert("We play later. See ya!")
}