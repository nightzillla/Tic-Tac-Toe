let ticBoard;
const userInput = '0';
const aiInput = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

const cells = document.querySelectorAll('.cell');
startGame();

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    ticBoard = Array.from(Array(9).keys());
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background');
        cells[i].addEventListener('click', turnClick, false)
    }
}
function turnClick(square) {
    turn(square.target.id, userInput);
}
function turn(squareId, player){
    ticBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(ticBoard, player);
    if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
    let plays = board.reduce((a, e, i)=>
        (e === player) ? a.concat(i) : a, []);
    let gamesWon = null;
    for (let [index, win] of winCombos.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            gamesWon = {index: index, player: player};
            break;
        }
    }
    return gamesWon;
}

function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) {
        document.getElementById.index.style.backgroundColor = gameWon.player = userInput ? "blue" : "red";
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', turnClick, false);
    }
}
//https://www.youtube.com/watch?v=P2TcQ3h0ipQ&t=602s&ab_channel=freeCodeCamp.orgiv