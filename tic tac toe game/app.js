
const player=document.querySelector("status");
const playAgain=document.querySelector("reset");
const allGrid=document.querySelectorAll("cell");

const xsymbol='X';
const osymbol='O';

let Live = true;
let Result=true;

const letterToSymbol=(letter) => letter ==='X' ? xsymbol: osymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'X') {
    player.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    player.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = allGrid[0].classList[1];
  const topMiddle = allGrid[1].classList[1];
  const topRight = allGrid[2].classList[1];
  const middleLeft = allGrid[3].classList[1];
  const middleMiddle = allGrid[4].classList[1];
  const middleRight = allGrid[5].classList[1];
  const bottomLeft = allGrid[6].classList[1];
  const bottomMiddle = allGrid[7].classList[1];
  const bottomRight = allGrid[8].classList[1];

  
  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    allGrid[0].classList.add('won');
    allGrid[1].classList.add('won');
    allGrid[2].classList.add('won');
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    allGrid[3].classList.add('won');
    allGrid[4].classList.add('won');
    allGrid[5].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    allGrid[6].classList.add('won');
    allGrid[7].classList.add('won');
    allGrid[8].classList.add('won');
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    allGrid[0].classList.add('won');
    allGrid[3].classList.add('won');
    allGrid[6].classList.add('won');
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    allGrid[1].classList.add('won');
    allGrid[4].classList.add('won');
    allGrid[7].classList.add('won');
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    allGrid[2].classList.add('won');
    allGrid[5].classList.add('won');
    allGrid[8].classList.add('won');
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    allGrid[0].classList.add('won');
    allGrid[4].classList.add('won');
    allGrid[8].classList.add('won');
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    allGrid[2].classList.add('won');
    allGrid[4].classList.add('won');
    allGrid[6].classList.add('won');
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    Live = false;
    player.innerHTML = 'Game is tied!';
  } else {
    Result = !Result;
    if (Result) {
      player.innerHTML = `${xSymbol} is next`;
    } else {
      player.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};


// event Handlers
const handleReset = () => {
  Result = true;
  player.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of allGrid) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  Live = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!Live || classList[1] === 'X' || classList[1] === 'O') {
    return;
  }

  if (Result) {
    classList.add('X');
    checkGameStatus();
  } else {
    classList.add('O');
    checkGameStatus();
  }
};


// event listeners
playAgain.addEventListener('click', handleReset);

for (const cellDiv of allGrid) {
  cellDiv.addEventListener('click', handleCellClick)
}