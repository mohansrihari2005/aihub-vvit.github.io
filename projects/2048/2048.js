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

function move(direction) {
    let moved = false;

    if (direction === 'ArrowUp') {
        moved = moveUp();
    } else if (direction === 'ArrowDown') {
        moved = moveDown();
    } else if (direction === 'ArrowLeft') {
        moved = moveLeft();
    } else if (direction === 'ArrowRight') {
        moved = moveRight();
    }

    if (moved) {
        addNewTile();
        updateBoard();
        if (checkGameOver()) {
            document.querySelector('.game-over').classList.add('show');
        }
    }
}

function moveUp() {
    let moved = false;
    for (let j = 0; j < size; j++) {
        let col = board.map(row => row[j]);
        let newCol = merge(col);
        for (let i = 0; i < size; i++) {
            if (board[i][j] !== newCol[i]) moved = true;
            board[i][j] = newCol[i];
        }
    }
    return moved;
}

function moveDown() {
    let moved = false;
    for (let j = 0; j < size; j++) {
        let col = board.map(row => row[j]).reverse();
        let newCol = merge(col).reverse();
        for (let i = 0; i < size; i++) {
            if (board[i][j] !== newCol[i]) moved = true;
            board[i][j] = newCol[i];
        }
    }
    return moved;
}

function moveLeft() {
    let moved = false;
    for (let i = 0; i < size; i++) {
        let row = board[i];
        let newRow = merge(row);
        if (board[i].toString() !== newRow.toString()) moved = true;
        board[i] = newRow;
    }
    return moved;
}

function moveRight() {
    let moved = false;
    for (let i = 0; i < size; i++) {
        let row = [...board[i]].reverse();
        let newRow = merge(row).reverse();
        if (board[i].toString() !== newRow.toString()) moved = true;
        board[i] = newRow;
    }
    return moved;
}

function merge(line) {
    let newLine = line.filter(val => val !== 0);
    for (let i = 0; i < newLine.length - 1; i++) {
        if (newLine[i] === newLine[i + 1]) {
            newLine[i] *= 2;
            score += newLine[i];
            newLine[i + 1] = 0;
        }
    }
    newLine = newLine.filter(val => val !== 0);
    while (newLine.length < size) {
        newLine.push(0);
    }
    return newLine;
}

function checkGameOver() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j] === 0) return false;
            if (j < size - 1 && board[i][j] === board[i][j + 1]) return false;
            if (i < size - 1 && board[i][j] === board[i + 1][j]) return false;
        }
    }
    return true;
}

function restartGame() {
    initGame();
}

initGame();
