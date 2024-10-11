//var
/* 00 01 02
   10 11 12
   20 21 22 */

//getValue, changeValue, checkCondition

//cell, board, gamestate
//get cell, add cell
//getboard, addboard, checkWin, resetboard
//promtUser, 

const Board = (function() {
    let board = [];
    
    //populate board
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j< 3; j++) {
            board[i].push(cell());
        }
    }


    const printBoard = () => {
        console.log(board.map((row) => row.map((cell) => cell.getValue()))); 
    };
    
    const addToken = (row, col, token) => {
        return board[row][col].addValue(token);
    }

    return {printBoard, addToken};
})();

function cell() {
    let value = '-';

    const addValue = (token) => {
        if (value == '-') {
            value = token;
            return true;
        }
        return false;
    };

    const getValue = () => {
        return value;
    };

    return {
        getValue, addValue
    };
};

//main



function GameController(
    playerOneName = "Player One",
    playerTwoName = "Player Two",
){
    let isWin = false;
    let count = 0;
    //const players() = {}
        

    
    let playerTracker = 0;
    
    while((isWin == false) || (count <= 9)) {
        //prompt
        console.log('tst');
        do {
            row = prompt('enter row: ');
            col = prompt('enter column: ');
            let confirm = Board.addToken(row, col, 'x');//row col player
            console.log(confirm);
            console.log(!confirm);
        } while (false);
        console.log('test2');
    }
}

let game = GameController();