let computerChoice;
let userChoice;
let result;
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const ramdonNumber = Math.floor(Math.random() * 3);

  if (ramdonNumber === 0) {
    computerChoice = "Rock";
  }
  if (ramdonNumber === 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice == userChoice) {
    result = "It's a draw";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You win";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You lost";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You lost";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You win";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You lost";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You win";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You lost";
  }
  resultDisplay.innerHTML = result;
}
