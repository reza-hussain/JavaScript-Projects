const playButton = document.querySelector(".begin");
const temp0 = document.querySelector("#name0");
const temp1 = document.querySelector("#name1");
const playerForm = document.querySelector(".player-form");
const overlay = document.querySelector(".overlay");
let name0 = document.querySelector("#name-0");
let name1 = document.querySelector("#name-1");
let score0 = document.querySelector("#score-0");
let score1 = document.querySelector("#score-1");
let diceRoll = document.querySelector(".dice-img");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const holdScore = document.querySelector(".hold");
const reset = document.querySelector(".reset");

let initialScore = 0;
let currentScore = [0, 0];
let currentPlayer = 0;
let mainScore0 = 0;
let mainScore1 = 0;
//Initializing the form and play button
playButton.addEventListener("click", function () {
  name0.textContent = temp0.value;
  name1.textContent = temp1.value;
  score0.textContent = initialScore;
  score1.textContent = initialScore;
  playerForm.classList.add("hidden");
  overlay.classList.add("hidden");
});
//function thqt turns player active or inactive(changes color)
activeToggle = function () {
  player0.classList.toggle("active");
  player1.classList.toggle("active");
  document.querySelector(".current-0").classList.toggle("active-label");
  document.querySelector(".current-1").classList.toggle("active-label");
};
//Dice Roll Button
diceRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceRoll.src = `/media/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore[currentPlayer] += dice;
    document.getElementById(`current-${currentPlayer}`).textContent =
      currentScore[currentPlayer];
  } else {
    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer == 0 ? 1 : 0;
    currentScore[currentPlayer] = 0;
    activeToggle();
  }
});

holdScore.addEventListener("click", function () {
  if (currentPlayer == 0 ) {
    mainScore0 += currentScore[currentPlayer];
    score0.textContent = mainScore0;
    currentScore[currentPlayer] = 0;
    document.getElementById(`current-${currentPlayer}`).textContent =
      currentScore[currentPlayer];
    currentPlayer = 1;
    activeToggle();
  } else {
    mainScore1 += currentScore[currentPlayer];
    score1.textContent = mainScore1;
    currentScore[currentPlayer] = 0;
    document.getElementById(`current-${currentPlayer}`).textContent =
      currentScore[currentPlayer];
    currentPlayer = 0;
    activeToggle();
  }
});

reset.addEventListener("click", function () {
  currentScore = [0, 0];
  currentPlayer = 0;
  mainScore0 = 0;
  mainScore1 = 0;
  score0.textContent = mainScore0;
  score1.textContent = mainScore1;
  document.getElementById(`current-${0}`).textContent =
    currentScore[0];
  document.getElementById(`current-${1}`).textContent =
    currentScore[1];

    if(player1.classList.contains("active")){
        activeToggle();
    }
});
