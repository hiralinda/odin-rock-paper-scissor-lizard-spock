document.addEventListener("DOMContentLoaded", function () {
  let humanScore = 0;
  let computerScore = 0;
  let roundsPlayed = 0;

  function updateGameStatus(result) {
    document.getElementById("round").textContent = `Round: ${roundsPlayed}/5`;
    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent =
      `You: ${humanScore} | Computer: ${computerScore}`;

    if (roundsPlayed === 5) {
      endGame();
    }
  }

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const choiceButtons = document.querySelectorAll(".choice-btn");
  choiceButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const choice = this.getAttribute("data-choice");
      playRound(choice);
    });
  });

  function playRound(humanChoice) {
    if (roundsPlayed >= 5) return;

    roundsPlayed++;
    const computerChoice = getComputerChoice();
    let result = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;

    if (humanChoice === computerChoice) {
      result += "It's a tie!";
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
      result += `You win!`;
      humanScore++;
    } else {
      result += `You lose!`;
      computerScore++;
    }

    updateGameStatus(result);
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
    document.getElementById("game-over").textContent = gameOverText;
    document.getElementById("game-over").classList.remove("hidden");

    // Show the Play Again button
    document.getElementById("play-again").classList.remove("hidden");

    // Disable game buttons
    const gameButtons = document.querySelectorAll(".game-container button");
    gameButtons.forEach((button) => (button.disabled = true));
  }

  // Add event listener for Play Again button
  const playAgainButton = document.getElementById("play-again");
  if (playAgainButton) {
    playAgainButton.addEventListener("click", function () {
      location.reload();
      console.log("Game restarted");
    });
  } else {
    console.error("Play Again button not found");
  }

  // Initialize the game status
  updateGameStatus("Waiting for your move...");
});
