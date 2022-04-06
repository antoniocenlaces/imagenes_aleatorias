'use strict';
// diceImage: imagen del dado a representar
const diceImage = document.querySelector('.dice');
// player0: sección del player--0
const player0 = document.querySelector('.player--0');
// player1: sección del player--1
const player1 = document.querySelector('.player--1');
// rollDice: tira a suerte el dado
const rollDice = document.querySelector('.btn--roll');
// holdScore: botón para guardar currentScore acumulado en  score
const holdScore = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
// scoreField0
const scoreField0 = document.getElementById('score--0');
// scoreField1
const scoreField1 = document.getElementById('score--1');
// currentScoreField0
const currentScoreField0 = document.getElementById('current--0');
// currentScoreField1
const currentScoreField1 = document.getElementById('current--1');
// player0Name
const player0Name = document.getElementById('name--0');
// player1Name
const player1Name = document.getElementById('name--1');
// Variables para controlar el juego
// score[]: almacena el score total de cada player
const score = [0, 0];
// currentScore[]: almacena el score actual total de cada player
let currentScore = 0;
// currentPlayer indicador de jugador actual
let currentPlayer = 0;
// play: nos dice si el juego está activo
let play = true;
initApp();
function switchUser() {
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
  currentScore = 0;
  currentPlayer = currentPlayer ? 0 : 1;
}
rollDice.addEventListener('click', function () {
  if (play) {
    const d = Math.round(Math.random() * 5) + 1;
    diceImage.src = `dice-${d}.png`;
    if (d === 1) {
      switchUser();
    } else {
      const currentScoreField = currentPlayer
        ? currentScoreField1
        : currentScoreField0;
      currentScore += d;
      currentScoreField.textContent = currentScore;
    }
  }
});
holdScore.addEventListener('click', function () {
  if (play) {
    const currentScoreField = currentPlayer
      ? currentScoreField1
      : currentScoreField0;
    const scoreField = currentPlayer ? scoreField1 : scoreField0;
    const player = currentPlayer ? player1Name : player0Name;
    score[currentPlayer] += currentScore;
    scoreField.textContent = score[currentPlayer];
    currentScore = 0;
    currentScoreField.textContent = 0;
    if (score[currentPlayer] >= 100) {
      player.textContent = `Player ${currentPlayer + 1} is the WINNER!`;
      play = false;
    } else {
      switchUser();
    }
  }
});
newGame.addEventListener('click', initApp);
function initApp() {
  play = true;
  currentPlayer = 0;
  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  player1.classList.remove('player--active');
  player0.classList.add('player--active');
  currentScoreField0.textContent = 0;
  scoreField0.textContent = 0;
  player0Name.textContent = 'PLAYER 1';
  currentScoreField1.textContent = 0;
  scoreField1.textContent = 0;
  player1Name.textContent = 'PLAYER 2';
}
