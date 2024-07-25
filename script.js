let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors", "lizard", "spock"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  if (roundsPlayed >= 5) return;

  const computerChoice = getComputerChoice();
  roundsPlayed++;

  let resultText = `Round ${roundsPlayed}: You chose ${humanChoice}, Computer chose ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    resultText += "It's a tie!";
  } else if (
    (humanChoice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (humanChoice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (humanChoice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (humanChoice === "lizard" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (humanChoice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  ) {
    resultText += `You win!`;
    humanScore++;
  } else {
    resultText += `You lose!`;
    computerScore++;
  }

  document.getElementById("result").innerHTML = resultText;
  updateScore();

  if (roundsPlayed === 5) {
    endGame();
  }
}

function updateScore() {
  document.getElementById("score").innerHTML =
    `Score: You ${humanScore} - ${computerScore} Computer`;
}

function endGame() {
  let gameOverText = "Game Over! ";
  if (humanScore > computerScore) {
    gameOverText += "You win the game!";
  } else if (computerScore > humanScore) {
    gameOverText += "Computer wins the game!";
  } else {
    gameOverText += "It's a tie game!";
  }
  document.getElementById("game-over").innerHTML = gameOverText;
}
