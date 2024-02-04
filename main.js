function playRound(playerSelection,computerSelection) {
    let resultRound //create variable to store win, loss, or tie
    if (playerSelection === computerSelection) { //check if playerSelection === computerSelection. If yes, the game is tied. 
        alert("Tie!"); //return "Tie!"
        return resultRound = "tie";
    } else if (playerSelection === "rock") { //else if player = rock
        if (computerSelection === "paper") {
            alert("You lose!")
            return resultRound = "loss";
        } else {
            alert("You win!")
            return resultRound = "win"
        }
    } else if (playerSelection === "scissors") { //else if player = scissors
        if (computerSelection === "rock") {
            alert("You lose!")
            return resultRound = "loss";
        } else {
            alert("You win!")
            return resultRound = "win";
        }
    } else if (playerSelection === "paper") { //else if player = paper
        if (computerSelection === "scissors") {
            alert("You lose!")
            return resultRound = "loss";
        } else {
            alert("You win!")
            return resultRound = "win";
        }
    }
}

function getcomputerChoice() {
    //create variable compNum
    //get random number between 1 and 3
    let compNum = Math.floor((Math.random() * 3) + 1)
    //if compNum = 1
    //return rock
    if (compNum === 1) {
        return "rock"
    //if compNum = 2
    //return paper
    } else if (compNum === 2) {
        return "paper"
    //if compNum = 3
    //return scissors
    } else if (compNum === 3) {
        return "scissors"
    }
}

//Data validation function:
//converts to lowercase first
//checks the for acceptable values for the user
    //has the user entered rock, paper, or scissors?
    //if yes, then nothing happens.
//otherwise it rejects the input.

//converts a string to lowercase
function stringLowerCase(a){
    return a = a.toLocaleLowerCase()
}
//create playerSelection constant
//prompt player for selection

const playerSelection = stringLowerCase(prompt("Choose either Rock, Paper, or Scissors.",""));
const computerSelection = getcomputerChoice();

console.log(playRound(playerSelection,computerSelection));

//console.log(getcomputerChoice());
