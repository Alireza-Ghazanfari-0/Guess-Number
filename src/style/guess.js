'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
//console.log(randomNumber);
let score = 20;
let highscore = 0;
document.querySelector('.a-input').value = '';

document.querySelector('.a-check').addEventListener('click', function () {
  let inpput = Number(document.querySelector('.a-input').value);
  //console.log(inpput, typeof inpput);
  if (inpput !== randomNumber) {
    score--;
    score > 0 ? (score = score) : (score = 0);
    if (score === 0) {
      document.querySelector('a.info').textContent = 'you lost the game!!';
    }
    document.querySelector('.score').textContent = score;
    document.querySelector('.a-info').textContent =
      inpput > randomNumber ? 'too high answer' : 'too low answer';
  } else if (inpput === randomNumber) {
    document.querySelector('.a-show').textContent = inpput;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.a-show').style.width = '14rem';
    document.querySelector('.a-info').textContent = 'CORRECT ANSWER';
    //console.log(score);
    document.querySelector('.highscore').textContent =
      score > highscore ? score : highscore;
  }
});

document.querySelector('.a-again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.822)';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  highscore = score;
  score = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.a-info').textContent = 'Start guessing';
  document.querySelector('.a-show').textContent = '?';
  document.querySelector('.a-show').style.width = '8rem';
  document.querySelector('.a-input').value = '';
});
