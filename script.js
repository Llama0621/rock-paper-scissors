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

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors!").toLowerCase();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `Tie! Both players picked ${humanChoice}.`;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore += 1;
            return "You win! Rock beats scissors.";
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore += 1;
            return "You win! Paper beats rock.";
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore += 1;
            return "You win! Scissors beats paper.";
        }
        computerScore += 1;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);
    }
    if (humanScore > computerScore) {
        return "Congrats! You won!";
    }
    else if (humanScore < computerScore) {
        return "Unlucky! You lost!";
    }
    else {
        return "Wow! A Tie!";
    }
}

console.log(playGame());