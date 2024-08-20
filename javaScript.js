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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(computerSelection, humanSelection))