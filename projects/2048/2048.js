let board = [];
let score = 0;
const size = 4;

function initGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';  
    board = [];
    score = 0;
    document.getElementById('score').textContent = '0';
    document.querySelector('.game-over').classList.remove('show');

    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = 0;
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${i}-${j}`;
            gameBoard.appendChild(cell);
        }
    }

    addNewTile();
    addNewTile();
    updateBoard();
}

function addNewTile() {
    const emptyCells = [];
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j] === 0) emptyCells.push({ i, j });
        }
    }
    if (emptyCells.length) {
        const { i, j } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[i][j] = Math.random() < 0.9 ? 2 : 4;
    }
}

function updateBoard() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.getElementById(`cell-${i}-${j}`);
            const value = board[i][j];
            cell.textContent = value || '';
            cell.dataset.value = value || '';
        }
    }
    document.getElementById('score').textContent = score;
}

document.addEventListener('keydown', (event) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault();
        move(event.key);
    }
});

function restartGame() {
    initGame();
}

initGame();
