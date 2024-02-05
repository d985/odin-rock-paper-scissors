const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
    playRound("rock");
});


const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', () => {
  playRound("paper");
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click', () => {
  playRound("scissors");
});

const results = document.querySelector("#results");
const scoreboard = document.querySelector("#scoreboard");
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerChoice) {  
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
    results.textContent = `You win!  ${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1).toLowerCase()} beats ${computerChoice}.`;
    
    playerScore += 1;
    if (playerScore === 5) {
        scoreboard.textContent = `Score: Player ${playerScore}, Computer ${computerScore}. Player wins!`;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        scoreboard.textContent = `Score: Player ${playerScore}, Computer ${computerScore}`;
    }
}

function youLose(playerChoice,computerChoice) {
    console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + playerChoice.toLowerCase() + ".");
    results.textContent = `You lose! ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)} beats ${playerChoice.toLowerCase()}.`;

    computerScore += 1;
    if (computerScore === 5) {
        scoreboard.textContent = `Score: Player ${playerScore}, Computer ${computerScore}. Computer wins :(`;
        playerScore = 0;
        computerScore = 0;
    }
    else {
        scoreboard.textContent = `Score: Player ${playerScore}, Computer ${computerScore}`;
    }
}

function tieGame () {
    console.log("TIE! Re-play the round.");
    results.textContent = "TIE! Re-play the round.";
    scoreboard.textContent = `Score: Player ${playerScore}, Computer ${computerScore}`;
}