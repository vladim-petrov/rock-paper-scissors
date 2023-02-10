// funcion CPU choice at random (Rock, paper, scissors)
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

