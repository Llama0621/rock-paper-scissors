function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    return "scissors";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const score = document.getElementById("score");
    const message = document.getElementById("message");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            message.textContent = `Tie! Both players picked ${humanChoice}.`;
            return;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            message.textContent = "You win! Rock beats scissors.";
            humanScore += 1;
            return;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            message.textContent = "You win! Paper beats rock.";
            humanScore += 1;
            return;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            message.textContent = "You win! Scissors beats paper.";
            humanScore += 1;
            return;
        }
        computerScore += 1;
        message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
        return;
    }
    const round = (humanSelection) => {
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if (humanScore === 5) {
            humanScore = 0;
            computerScore = 0;
            message.textContent = "Congrats! You won!";
        }
        else if (computerScore === 5) {
            humanScore = 0;
            computerScore = 0;
            message.textContent = "Unlucky! You lost!";
        }
        score.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    }
    rock.addEventListener("click", () => round("rock"));
    paper.addEventListener("click", () => round("paper"));
    scissors.addEventListener("click", () => round("scissors"));
}

playGame();