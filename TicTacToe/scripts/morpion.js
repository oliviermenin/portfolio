const grid = document.getElementById('grid');
const cells = Array.from(document.getElementsByClassName('cell'));
const currentPlayerDisplay = document.getElementById('currentPlayer');
const playerOneScore = document.getElementById('playerOne');
const playerTwoScore = document.getElementById('playerTwo');
const replayButton = document.getElementById('replay');

let currentPlayer = 2;
let playerOneScoreValue = 0;
let playerTwoScoreValue = 0;
let gameEnded = false;

function handleCellClick(cell) {
  if (!gameEnded && cell.textContent === '') {
    if (currentPlayer === 1) {
      cell.textContent = 'X';
      currentPlayer = 2;
    } else {
      cell.textContent = 'O';
      currentPlayer = 1;
    }

    currentPlayerDisplay.textContent = `Joueur ${currentPlayer}`;

    if (checkWin()) {
      currentPlayerDisplay.textContent = `Joueur ${currentPlayer} a gagné !`;
      endGame();
    } else if (checkTie()) {
      currentPlayerDisplay.textContent = 'Match nul !';
      endGame();
    }
  }
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      cells[i * 3].textContent === cells[i * 3 + 1].textContent &&
      cells[i * 3 + 1].textContent === cells[i * 3 + 2].textContent &&
      cells[i * 3].textContent !== ''
    ) {
      if (currentPlayer === 1) {
        playerOneScoreValue++;
        playerOneScore.textContent = playerOneScoreValue;
      } else {
        playerTwoScoreValue++;
        playerTwoScore.textContent = playerTwoScoreValue;
      }
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      cells[i].textContent === cells[i + 3].textContent && cells[i + 3].textContent === cells[i + 6].textContent &&cells[i].textContent !== '') {
      if (currentPlayer === 1) {
        playerOneScoreValue++;
        playerOneScore.textContent = playerOneScoreValue;
      } else {
        playerTwoScoreValue++;
        playerTwoScore.textContent = playerTwoScoreValue;
      }
      return true;
    }
  }

  if (
    (cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent && 
      cells[0].textContent !== '') || (cells[2].textContent === cells[4].textContent &&
      cells[4].textContent === cells[6].textContent &&
      cells[2].textContent !== '')
  ) {
    if (currentPlayer === 1) {
      playerOneScoreValue++;
      playerOneScore.textContent = playerOneScoreValue;
    } else {
      playerTwoScoreValue++;
      playerTwoScore.textContent = playerTwoScoreValue;
    }
    return true;
  }

  return false;
}

function checkTie() {
  return cells.every((cell) => cell.textContent !== '');
}

function endGame() {
  gameEnded = true;
}

function resetGame() {
  currentPlayer = 1;
  gameEnded = false;

  cells.forEach((cell) => {
    cell.textContent = '';
  });

  currentPlayerDisplay.textContent = `Joueur ${currentPlayer}`;

  playerOneScoreValue = 0;
  playerTwoScoreValue = 0;
  playerOneScore.textContent = playerOneScoreValue;
  playerTwoScore.textContent = playerTwoScoreValue;
}

cells.forEach((cell) => {
  cell.addEventListener('click', () => {
    handleCellClick(cell);
  });
});

replayButton.addEventListener('click', resetGame);
