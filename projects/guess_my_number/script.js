"use strict";

const labelMessage = document.querySelector(".message");
const labelScore = document.querySelector(".score");
const labelHighscore = document.querySelector(".highscore");
const labelSecretNumber = document.querySelector(".number");

const guessInput = document.querySelector(".guess");

const btnCheck = document.querySelector(".check");
const btnResetGame = document.querySelector(".again");

const body = document.querySelector("body");

const successColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--success-color");

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

function displayMessage(messageToDisplay) {
  labelMessage.textContent = messageToDisplay;
}

function generateSecretNumber() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
}

btnCheck.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    labelSecretNumber.textContent = secretNumber;
    body.style.backgroundColor = successColor;
    labelSecretNumber.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      labelHighscore.textContent = score;
    }
  }
});
