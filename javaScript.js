let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => {
    let randomNumber = Math.floor(1+Math.random() * 3);
    let compChoice;
    if(randomNumber === 1){
        compChoice = "rock"
    }
    else if(randomNumber === 2){
        compChoice = "paper"
    }
    else{
        compChoice = "scissors"
    }
    return compChoice;
}


let getHumanChoice = () => {
    let userChoice = prompt("Enter rock, paper or scissors").toLowerCase();
    if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
        return userChoice;
    }
    else{
        getHumanChoice();
    }
    return compChoice;
}


let playRound = (computer, human) => {
    if(human === computer){
        console.log(`it's a draw`);
    }
    else if((human === "rock" && computer === "scissors") || 
            (human === "paper" && computer === "rock") || 
            (human === "scissors" && computer === "paper")){
                humanScore++;
                console.log(`You win. ${human} beats ${computer}`);
    }
    else {
        computerScore++;
        console.log(`You Lose. ${computer} beats ${human}`);
    }
}


let playGame = () => {
    for (let i = 0 ; i < 5 ; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, humanSelection));
        console.log(`human `+humanScore);
        console.log(`computer `+computerScore);
    }
    console.log(`Game Over!`);
    if(humanScore === computerScore){
        console.log(`it's a draw`);
    }
    else if(humanScore > computerScore){
        console.log(`You win! ${humanScore} points to ${computerScore}`);
    }
    else{
        console.log(`You lose. ${computerScore} points to ${humanScore}`);
    }
}

playGame();