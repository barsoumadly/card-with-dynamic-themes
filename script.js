'use strict';

// Selecting elements
const buttonsEl = document.querySelector('.buttons').children;
const columnEl = document.querySelectorAll('span');
const cardEl = document.querySelector('.card');
const nameEl = document.querySelector('h4');

// Selecting buttons
const btnBlue = document.querySelector('.btn1');
const btnPink = document.querySelector('.btn2');
const btnGreen = document.querySelector('.btn3');
const btnViolet = document.querySelector('.btn4');
const btnYellow = document.querySelector('.btn5');

const changeCardColor = function (color) {
  // change card background
  cardEl.style.background = `linear-gradient(to bottom, ${color} 110px,#ffffff 110px)`;

  // change name color
  nameEl.style.color = color;
  for (let i = 0; i < columnEl.length; i++) {
    columnEl[i].style.color = color;
  }

  // change buttons color
  const [firstChild, secondChild] = buttonsEl;
  firstChild.style.border = secondChild.style.border = `3px solid ${color}`;
  firstChild.style.backgroundColor = color;
  secondChild.style.color = color;
};

btnBlue.addEventListener('click', () => {
  changeCardColor('#3498db');
});

btnPink.addEventListener('click', () => {
  changeCardColor('#ff1756');
});

btnGreen.addEventListener('click', () => {
  changeCardColor('#1cb65d');
});

btnViolet.addEventListener('click', () => {
  changeCardColor('#8e44ad');
});

btnYellow.addEventListener('click', () => {
  changeCardColor('#f4b932');
});
