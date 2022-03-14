const options = ["ROCK", "PAPER", "SCISSORS"];
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
        break;
    case "01":
        alert(playerChoice + " x " + options[computerChoice] + ". Computer WINS. You loose!");
        break;
        case "02":
        alert(playerChoice + " x " + options[computerChoice] + ". Computer LOST. You WIN! Well done!");
        break;
    case "10":
        alert(playerChoice + " x " + options[computerChoice] + ". Computer LOST. You WIN! Well done!");
        break;
    case "11":
        alert(playerChoice + " x " + playerChoice + ". It is a tie!");
        break;
        case "12":
        alert(playerChoice + " x " + options[+computerChoice] + ". Computer WINS. You loose!");
        break;
    case "20":
        alert(playerChoice + " x " + options[+computerChoice] + ". Computer WINS. You loose!");
        break;
    case "21":
        alert(playerChoice + " x " + options[+computerChoice] + ". Computer LOST. You WIN! Well done!");
        break;
    case "22":
        alert(playerChoice + " x " + playerChoice + ". It is a tie!");
        break;
    }
