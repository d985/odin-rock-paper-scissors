function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound() {  
    let playerChoice = prompt("Enter rock, paper, or scissors:", "rock").toLowerCase();
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice==="rock") {
        switch(computerChoice) {
            case "rock":
                return tieGame();
            case "paper":
                return youLose(playerChoice,computerChoice);
            case "scissors":
                return youWin(playerChoice,computerChoice);
        }
    } else if (playerChoice==="paper") {
        switch(computerChoice) {
            case "rock":
                return youWin(playerChoice,computerChoice);
            case "paper":
                return tieGame();
            case "scissors":
                return youLose(playerChoice,computerChoice);
        }
    } else if (playerChoice==="scissors") {
        switch(computerChoice) {
            case "rock":
                return youLose(playerChoice,computerChoice);
            case "paper":
                return youWin(playerChoice,computerChoice);
            case "scissors":
                return tieGame();
        }
    } else {
        return invalidSelection();
    }
}

function youWin(playerChoice,computerChoice) {
    console.log("You win! " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase() + " beats " + computerChoice + ".");
    return "player"
}

function youLose(playerChoice,computerChoice) {
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice.toLowerCase() + ".");
    return "computer";
}

function tieGame () {
    console.log("TIE! Re-play the round.");
    return(playRound());
}

function invalidSelection () {
    console.log("Invalid Selection. Enter rock, paper, or scissors.");
    return(playRound());
}

function gameBestofFive () {
    let playerWins = 0;
    let computerWins = 0;
    let winner;

    while (playerWins < 3 && computerWins < 3) {
        winner = playRound();
        switch(winner) {
            case "player":
                playerWins++;
                console.log("Player: " + playerWins + " wins, Computer: " + computerWins + " wins")
                break;
            case "computer":
                computerWins++;
                console.log("Player: " + playerWins + " wins, Computer: " + computerWins + " wins")
                break;
        }
    }
    console.log( (playerWins===3 ? "Player wins!" : "Computer wins!"));
}

gameBestofFive();