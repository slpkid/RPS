const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.btn-select');

const clearButton = document.querySelector('#clear-btn');

let pScore = 0;
let compScore = 0;

const messageLog = document.querySelector('#message-log');

// Lets the player clear the message log if it gets too cluttered
clearButton.addEventListener('click',() =>  {
    while (messageLog.firstChild) {
        messageLog.removeChild(messageLog.firstChild);
    }
})

//When a choice button is clicked, loops through to find which button was clicked.
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        pChoiceMessage(button.id);
        playerSelection = button.id;
       playRound(playerSelection,computerSelection);
    })
})

function pChoiceMessage(choice) {
    logMessage("Player picked ",choice)
}

function compChoiceMessage(choice) {
    logMessage("The Computer picked ",choice)
}

function logMessage(text,vary) {
    const message = document.createElement("p");
    if (vary == undefind) {
        vary = "";
    }
    message.textContent = `${text}${vary}`
    messageLog.appendChild(message);
}

function playRound(playerSelection,computerSelection) {
    computerSelection = getcomputerChoice();
    if (playerSelection === computerSelection) {
        logMessage("Tie!");
        return;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            compScore++;
            logMessage("Player Loses!","")
        } else {
            pScore++;
            logMessage("Player Wins!","")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            compScore++;
            logMessage("Player Loses!","")
        } else {
            pScore++;
            logMessage("Player Wins!","")
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            compScore++;
            logMessage("Player Loses!","")
        } else {
            pScore++;
            logMessage("Player Wins!","")
        }
    }
}


// function playRound(playerSelection,computerSelection) { 
//     computerSelection = getcomputerChoice(); 
//     let resultRound //create variable to store win, loss, or tie
//     if (playerSelection === computerSelection) { //check if playerSelection === computerSelection. If yes, the game is tied. 
//         alert("Tie!"); //return "Tie!"
//         return resultRound = "tie";
//     } else if (playerSelection === "rock") { //else if player = rock
//         if (computerSelection === "paper") {
//             alert("You lose!")
//             compScore++;
//             return resultRound = "loss";
//         } else {
//             alert("You win!")
//             pScore++;
//             return resultRound = "win"
//         }
//     } else if (playerSelection === "scissors") { //else if player = scissors
//         if (computerSelection === "rock") {
//             alert("You lose!")
//             compScore++;
//             return resultRound = "loss";
//         } else {
//             alert("You win!")
//             pScore++;
//             return resultRound = "win";
//         }
//     } else if (playerSelection === "paper") { //else if player = paper
//         if (computerSelection === "scissors") {
//             alert("You lose!")
//             compScore++;
//             return resultRound = "loss";
//         } else {
//             alert("You win!")
//             pScore++;
//             return resultRound = "win";
//         }
//     }
// }

function getcomputerChoice() {
    //create variable compNum
    //get random number between 1 and 3
    let compNum = Math.floor((Math.random() * 3) + 1)
    //if compNum = 1
    //return rock
    if (compNum === 1) {
        compChoiceMessage("rock")
        return "rock"
    //if compNum = 2
    //return paper
    } else if (compNum === 2) {
        compChoiceMessage("paper")
        return "paper"
    //if compNum = 3
    //return scissors
    } else if (compNum === 3) {
        compChoiceMessage("scissors")
        return "scissors"
    }
}

let playerSelection
let computerSelection

// function playGame() {
//     pScore = 0
//     compScore = 0
//     //create variable for gameWinLoss
//     //let gameWinLoss
//     //run playRound 5 times lmao
//     console.log(playRound(playerSelection,computerSelection));
//     console.log(playRound(playerSelection,computerSelection));
//     console.log(playRound(playerSelection,computerSelection));
//     console.log(playRound(playerSelection,computerSelection));
//     console.log(playRound(playerSelection,computerSelection));
//     //run a comparison between pScore and combuterScore
//     //==> higher score wins. alert if player has won or lost or tied

//     if (pScore > compScore) {
//         alert("You beat the computer!")
//         //return gameWinLoss = "Game win!"
//     } else if (pScore < compScore) {
//         alert ("You lost to the computer!")
//        // return gameWinLoss = "Game loss!"
//     } else if (pScore === compScore) {
//         alert ("You tied the computer!") 
//      //   return gameWinLoss = "Game tied!"
//     }
// }

// //Data validation function:
// //converts to lowercase first
// //checks the for acceptable values for the user
//     //has the user entered rock, paper, or scissors?
//     //if yes, then nothing happens.
// //otherwise it rejects the input.

// //converts a string to lowercase
// function stringLowerCase(a){
//     return a = a.toLocaleLowerCase()
// }
// //create playerSelection constant
// //prompt player for selection



// //console.log(playRound(playerSelection,computerSelection));
// //playGame();