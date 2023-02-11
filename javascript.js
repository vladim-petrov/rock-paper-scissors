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

function playRound(playerSelection, computerSelection) {
    let winner;
   if (playerSelection === rock && computerSelection === paper) {
    return winner = "You Lose! Paper beats Rock";
   } else if (playerSelection === rock && computerSelection === scissors) { 
    return winner = "You Win! Rock beats Scissors";
   } else if (playerSelection === rock && computerSelection === rock) { 
    return winner = "Tie! Rock can't beat Rock";
   } else if (playerSelection === paper && computerSelection === rock) { 
    return winner = "You Win! Paper beats Rock";
   } else if (playerSelection === paper && computerSelection === paper) { 
    return winner = "Tie! Paper can't beat Paper";
   } else if (playerSelection === paper && computerSelection === scissors) { 
    return winner = "You Lose! Scissors beats Paper";
   } else if (playerSelection === scissors && computerSelection === rock) { 
    return winner = "You Lose! Rock beats Scissors";
   } else if (playerSelection === scissors && computerSelection === paper) { 
    return winner = "You win! Scissors beats Paper";
   } else if (playerSelection === scissors && computerSelection === scissors) { 
    return winner = "Tie! Scissors can't beat Scissors";
   }
}


console.log(playRound(playerSelection, computerSelection));





















