function playRound(playerSelection,computerSelection) {
    //create variable winLose 
    //check if playerSelection === computerSelection
        //if yes, the game is tied. 
        //return "Tie!"
    //else if player = rock
        //if computer = paper 
            //return "You lose"
            //else
            //return "You win!"
    //else if player = scissors
        //if computer = rock
            //return "You lose"
        //else
        //return "You win!"
    //else if player = paper
        //if computer = scissors
            //return "You lose"
            //else
            //return "You win!"
}

function getcomputerChoice() {
    //create variable compNum
    //get random number between 1 and 3
    //if compNum = 1
        //return rock
    //if compNum = 2
        //return paper
    //if compNum = 3
        //return scissors
}

const playerSelection = "rock" //prompt player for selection.
    //convert selection to lowercase for case insensitivity
const computerSelection = getcomputerChoice();

console.log(playRound(playerSelection,computerSelection));