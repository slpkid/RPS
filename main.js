function playRound(playerSelection,computerSelection) {
    playerSelection = stringLowerCase(prompt("Choose either Rock, Paper, or Scissors.","")); 
    computerSelection = getcomputerChoice(); 
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

let playerSelection
let computerSelection
//create variable for playerScore
let playerScore = 0
//create variable for combuterScore
let computerScore = 0

function playGame() {
    playerScore = 0
    computerScore = 0
    //create variable for gameWinLoss
    //let gameWinLoss
    //run playRound 5 times lmao
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    console.log(playRound(playerSelection,computerSelection));
    //run a comparison between playerScore and combuterScore
    //==> higher score wins. alert if player has won or lost or tied

    if (playerScore > computerScore) {
        alert("You beat the computer!")
        //return gameWinLoss = "Game win!"
    } else if (playerScore < computerScore) {
        alert ("You lost to the computer!")
       // return gameWinLoss = "Game loss!"
    } else if (playerScore === computerScore) {
        alert ("You tied the computer!") 
     //   return gameWinLoss = "Game tied!"
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



//console.log(playRound(playerSelection,computerSelection));
playGame();