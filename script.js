'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const audioWin = new Audio('sound/win.mp3');
const audioLost = new Audio('sound/lost.mp3');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Press Enter to click
var input = document.getElementById('numberInput');
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('clickBtn').click();
  }
});

// Again Button ->  will keep the game mode + high score when pressed
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  // stop audio if button clicked
  audioWin.pause();
  audioWin.currentTime = 0;
  audioLost.pause();
  audioLost.currentTime = 0;

  if (
    document.querySelector('.current-mode').textContent === 'Current mode: Easy'
  ) {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.current-mode').textContent = 'Current mode: Easy';
    document.querySelector('.between').textContent = '(Between 1 and 20)';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  } else if (
    document.querySelector('.current-mode').textContent ===
    'Current mode: Medium'
  ) {
    secretNumber = Math.trunc(Math.random() * 30) + 1;
    document.querySelector('.current-mode').textContent =
      'Current mode: Medium';
    document.querySelector('.between').textContent = '(Between 1 and 30)';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  } else if (
    document.querySelector('.current-mode').textContent === 'Current mode: Hard'
  ) {
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    document.querySelector('.current-mode').textContent = 'Current mode: Hard';
    document.querySelector('.between').textContent = '(Between 1 and 50)';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  } else if (
    document.querySelector('.current-mode').textContent === 'Current mode: God'
  ) {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 100) + 1;

    document.querySelector('.current-mode').textContent = 'Current mode: God';
    document.querySelector('.between').textContent = '(Between 1 and 100)';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  } else {
  }
});

// Button -> Easy
document.querySelector('.easy').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // stop audio if button clicked
  audioWin.pause();
  audioWin.currentTime = 0;
  audioLost.pause();
  audioLost.currentTime = 0;

  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.current-mode').textContent = 'Current mode: Easy';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Button -> Medium
document.querySelector('.medium').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  // stop audio if button clicked
  audioWin.pause();
  audioWin.currentTime = 0;
  audioLost.pause();
  audioLost.currentTime = 0;

  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.current-mode').textContent = 'Current mode: Medium';
  document.querySelector('.between').textContent = '(Between 1 and 30)';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Button -> Hard
document.querySelector('.hard').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 50) + 1;

  // stop audio if button clicked
  audioWin.pause();
  audioWin.currentTime = 0;
  audioLost.pause();
  audioLost.currentTime = 0;

  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.current-mode').textContent = 'Current mode: Hard';
  document.querySelector('.between').textContent = '(Between 1 and 50)';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// Button -> GOD
document.querySelector('.god-mode').addEventListener('click', function () {
  score = 10;
  highscore = 0;
  secretNumber = Math.trunc(Math.random() * 100) + 1;

  // stop audio if button clicked
  audioWin.pause();
  audioWin.currentTime = 0;
  audioLost.pause();
  audioLost.currentTime = 0;

  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.current-mode').textContent = 'Current mode: God';
  document.querySelector('.between').textContent = '(Between 1 and 100)';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// play audio if win or loss
document.querySelector('.check').addEventListener('click', function () {
  if (document.querySelector('.message').textContent === '🎉 Correct number!') {
    audioWin.play();
  } else if (
    document.querySelector('.message').textContent === '💥 You lost the game!'
  ) {
    audioLost.play();
  }
});
