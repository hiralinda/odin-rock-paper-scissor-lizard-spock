let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  const getComputerChoices = ["rock", "paper", "scissors", "lizard", "spock"];
  return getComputerChoices[
    Math.floor(Math.random() * getComputerChoices.length)
  ];
}

function playRound(humanChoice) {
  if (roundsPlayed >= 5) return;

  const computerChoice = getComputerChoice();
  roundsPlayed++;

  let resultText = `Round ${roundsPlayed}: You chose ${humanChoice}, Computer chose ${computerChoice}. `;

  if (humanChoice === computerChoice) {
    resultText += "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "lizard") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "spock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "lizard") ||
    (humanChoice === "lizard" && computerChoice === "spock") ||
    (humanChoice === "lizard" && computerChoice === "paper") ||
    (humanChoice === "spock" && computerChoice === "scissors") ||
    (humanChoice === "spock" && computerChoice === "rock")
  ) {
    resultText += `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultText += `You lose! ${computerChoice} beats ${humanChoice}`;
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
    `Score - You: ${humanScore}, Computer: ${computerScore}`;
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
