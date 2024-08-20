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

console.log(getComputerChoice());