let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
  if (gameBoard[index] === '' && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].textContent = currentPlayer;

    if (checkWin()) {
      document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkDraw()) {
      document.getElementById('message').textContent = 'It\'s a draw!';
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return !gameBoard.includes('');
}

// Reset button functionality
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
  }

  document.getElementById('message').textContent = '';
});
