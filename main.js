function playRound(playerSelection,computerSelection) {
    let resultRound //create variable to store win, loss, or tie
    if (playerSelection === computerSelection) { //check if playerSelection === computerSelection. If yes, the game is tied. 
        alert("Tie!"); //return "Tie!"
        return resultRound = "tie";
    } else if (playerSelection === "rock") { //else if player = rock
        if (computerSelection === "paper") {
            alert("You lose!")
            computerScore++;
            return resultRound = "loss";
        } else {
            alert("You win!")
            playerScore++;
            return resultRound = "win"
        }
    } else if (playerSelection === "scissors") { //else if player = scissors
        if (computerSelection === "rock") {
            alert("You lose!")
            computerScore++;
            return resultRound = "loss";
        } else {
            alert("You win!")
            playerScore++;
            return resultRound = "win";
        }
    } else if (playerSelection === "paper") { //else if player = paper
        if (computerSelection === "scissors") {
            alert("You lose!")
            computerScore++;
            return resultRound = "loss";
        } else {
            alert("You win!")
            playerScore++;
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
        alert(`The Computer picked Rock!`)
        return "rock"
    //if compNum = 2
    //return paper
    } else if (compNum === 2) {
        alert(`The Computer picked Paper!`)
        return "paper"
    //if compNum = 3
    //return scissors
    } else if (compNum === 3) {
        alert(`The Computer picked Scissors`)
        return "scissors"
    }
}

function playGame() {
    //create variable for playerScore
    let playerScore
    //create variable for combuterScore
    let computerScore
    //run playRound 5 times lmao
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    //run a comparison between playerScore and combuterScore
    if (playerScore > computerScore) {
        alert("You beat the computer!")
    } else if (playerScore < computerScore) {
        alert ("You lost to the computer!")
    } else {
        alert ("Tie!")
    }
    //==> higher score wins. alert if player has won or lost (tieing is not possible)
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

const playerSelection = stringLowerCase(prompt("Choose either Rock, Paper, or Scissors.","")); // need to move this to the playround func...
const computerSelection = getcomputerChoice(); // need to move this to playRound func

//console.log(playRound(playerSelection,computerSelection));