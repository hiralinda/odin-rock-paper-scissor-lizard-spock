function getComputerChoice() {
  const getComputerChoices = ["rock", "paper", "scissors", "lizard", "spock"];
  return getComputerChoices[
    Math.floor(Math.random() * getComputerChoices.length)
  ];
}

function getUserChoice() {
  let userChoice = prompt(
    "Do you choose rock, paper, scissors, lizard, or spock?"
  );
  return userChoice;
}

function playGame() {}

playGame();
