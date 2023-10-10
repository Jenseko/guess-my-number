'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').textContent = 23;
// console.log(document.querySelector('.guess').value);

// Math.trunc --> schneidet Dezimalstellen ab
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  //   wenn keine Eingabe gibt
  if (!guess) {
    document.querySelector('.message').textContent = ' ⛔️ No number!';

    // wenn User gewinnt
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🔥 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // wenn Input zu hoch ist
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 🙄 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }

    // wenn Input zu niedrig ist
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = ' 📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 🙄 You lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.message').textContent = '... Start guessing!';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').textContent = ' ';
  });
});
