const helloWorld = 'Hello, World!';
//
//
//
const square = document.querySelector('#square');
const gridSizeFromDom = document.querySelector('.gridSize');
const grid = document.querySelector('.grid');
const colorPicker = document.querySelector('#color-picker');
const colorMode = document.querySelector('.color-mode');
const clear = document.querySelector('.clear');
const randomColor = document.querySelector('.random');

const divCreation = function createLotsOfDivInSquareContainer() {
  let grid = 16;
  let i = 0;
  for (; i < (grid * grid); i++) {
    const divCreate = document.createElement('div');
    square.style.cssText = `display: grid; grid-template-columns: repeat(${grid}, 1fr); grid-template-rows: repeat(${grid}, 1fr);`;
    square.appendChild(divCreate);
  }
  gridSizeFromDom.textContent = `${grid} x ${grid}`;
};

divCreation();

colorMode.addEventListener('click', () => {
  const div = document.querySelectorAll('#square > div');
  div.forEach((div) => {
    div.addEventListener('mouseenter', e => {
      e.target.style.backgroundColor = `${colorPicker.value}`;
    });
  });
});

grid.addEventListener('click', function createLotsOfDivInSquareContainer() {
  divReset();
  let grid = Number(prompt('Type any number from 1 to 100'));
  if (grid > 100 || grid < 0) {
    grid = 16;
  }
  let i = 0;
  for (; i < (grid * grid); i++) {
    const divCreate = document.createElement('div');
    square.style.cssText = `display: grid; grid-template-columns: repeat(${grid}, 1fr); grid-template-rows: repeat(${grid}, 1fr);`;
    square.appendChild(divCreate);
  }
  gridSizeFromDom.textContent = `${grid} x ${grid}`;
});

const divReset = function resetTheDivCreatingNew() {
  const div = document.querySelectorAll('#square > div');

  div.forEach((div) => {
      div.remove('div');
  });
};

clear.addEventListener('click', function removeDiv() {
  const div = document.querySelectorAll('#square > div');

  div.forEach((div) => {
    div.style.backgroundColor = '';
  });
});

