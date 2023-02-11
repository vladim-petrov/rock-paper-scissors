// get CPU choice at random (Rock, paper, scissors)
    const rock = 1;
    const paper = 2;
    const scissors = 3;

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        console.log("Rock");
    } else if (randomChoice === 2) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
    return randomChoice;
}

// get player input (case-insensitive)
const playerSelection = parseInt(prompt("Choose: rock, paper or scissors","Type: 1 for Rock, 2 for Paper or 3 for Scissors").toLowerCase());
const computerSelection = getComputerChoice();

// Write the logic of rock, paper, scissors game
//
    let winner;
    let loser;
    let tie;
function playRound(playerSelection, computerSelection) {
       if (playerSelection === rock && computerSelection === paper) {
    return loser = "You Lose! Paper beats Rock";
   } else if (playerSelection === rock && computerSelection === scissors) { 
    return winner = "You Win! Rock beats Scissors";
   } else if (playerSelection === rock && computerSelection === rock) { 
    return tie = "Tie! Rock can't beat Rock";
   } else if (playerSelection === paper && computerSelection === rock) { 
    return winner = "You Win! Paper beats Rock";
   } else if (playerSelection === paper && computerSelection === paper) { 
    return tie = "Tie! Paper can't beat Paper";
   } else if (playerSelection === paper && computerSelection === scissors) { 
    return loser = "You Lose! Scissors beats Paper";
   } else if (playerSelection === scissors && computerSelection === rock) { 
    return loser = "You Lose! Rock beats Scissors";
   } else if (playerSelection === scissors && computerSelection === paper) { 
    return winner = "You win! Scissors beats Paper";
   } else if (playerSelection === scissors && computerSelection === scissors) { 
    return tie = "Tie! Scissors can't beat Scissors";
   }
   return winner || loser || tie;
}


console.log(playRound(playerSelection, computerSelection));


// function game() until 5 wins by player or cpu
let playerScore = 0;
let computerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = parseInt(prompt("Choose: rock, paper or scissors","Type: 1 for Rock, 2 for Paper or 3 for Scissors").toLowerCase());
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("It's a tie!");
    }
}

game();






















