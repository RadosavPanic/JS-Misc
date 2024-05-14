"use strict";

const labelMessage = document.querySelector(".message");
const labelScore = document.querySelector(".score");
const labelHighscore = document.querySelector(".highscore");
const labelSecretNumber = document.querySelector(".number");

const guessInput = document.querySelector(".guess");

const btnCheck = document.querySelector(".check");
const btnResetGame = document.querySelector(".again");
const btnResetHighScore = document.querySelector(".resethighscore");

const body = document.querySelector("body");

const rootElement = getComputedStyle(document.documentElement);
const initialBgColor = rootElement.getPropertyValue("--color-black");
const successBgColor = rootElement.getPropertyValue("--success-color");
const whiteBgColor = rootElement.getPropertyValue("--color-white");
const whiteHoverColor = rootElement.getPropertyValue("--hover-white");

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

function generateSecretNumber() {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  return secretNumber;
}

function displayMessage(messageToDisplay = "Start guessing...") {
  labelMessage.textContent = messageToDisplay;
}

function displayScore(scoreToDisplay) {
  labelScore.textContent = scoreToDisplay;
}

function displayHighscore(scoreToDisplay) {
  labelHighscore.textContent = scoreToDisplay;
}

function displaySecretNumber(secretNumber) {
  labelSecretNumber.textContent = secretNumber;
}

const STYLE_ACTION_TYPES = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
};

function setStyles(styleType) {
  if (styleType === STYLE_ACTION_TYPES.SUCCESS) {
    body.style.backgroundColor = successBgColor;
    btnCheck.style.backgroundColor = whiteHoverColor;
    labelSecretNumber.style.width = "30rem";

    guessInput.value = "";
    btnCheck.disabled = true;
    guessInput.disabled = true;
  }
  if (styleType === STYLE_ACTION_TYPES.INITIAL) {
    body.style.backgroundColor = initialBgColor;
    btnCheck.style.backgroundColor = whiteBgColor;
    labelSecretNumber.style.width = "15rem";

    guessInput.value = "";
    btnCheck.disabled = false;
    guessInput.disabled = false;
  }
}

btnCheck.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage("⛔ No Number!");
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    displaySecretNumber(secretNumber);

    setStyles(STYLE_ACTION_TYPES.SUCCESS);

    if (score > highscore) {
      highscore = score;
      localStorage.setItem("highscore", highscore);
      displayHighscore(score);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
});

btnResetGame.addEventListener("click", () => {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage(); // Default parameter is 'Start guessing...'

  displayScore(score);
  displaySecretNumber("?");
  setStyles(STYLE_ACTION_TYPES.INITIAL);
});

btnResetHighScore.addEventListener("click", () => {
  highscore = 0;
  localStorage.setItem("highscore", highscore);
  displayHighscore(highscore);
});

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("highscore")) {
    displayHighscore(localStorage.getItem("highscore"));
  }
});
