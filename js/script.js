let tictactoePlay = (function() {
    let gameboard = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    let currentPlayer = "X";
    let gameActive = true;
    let winningPlayer = ".";
    console.log(gameboard.indexOf("."));
    while (gameboard.indexOf(".") != -1){

        currentPlay = +prompt("Enter place where you want to play: ");
        while (gameboard[currentPlay] != "."){
            currentPlay = +prompt("Enter place where you want to play: ");
        }
        gameboard[currentPlay] = currentPlayer;

        // winning boards
        row1 = gameboard.slice(3);
        row2 = gameboard.slice(3,6);
        row3 = gameboard.slice(6,9);
        col1 = gameboard.filter((_, index) => index % 3 == 0);
        col2 = gameboard.filter((_, index) => index % 3 == 1);
        col3 = gameboard.filter((_, index) => index % 3 == 2);
        diagonal1 = gameboard.filter((_, index) => index % 4 == 0);
        diagonal2 = [gameboard[2], gameboard[4], gameboard[6]];
        console.log(row1,row2,row3);
        console.log(col1,col2,col3);
        console.log(diagonal1,diagonal2);
        if (row1.indexOf(".") == -1 && row1 == row1.sort() || row2.indexOf(".") == -1 && row2 == row2.sort() || row3.indexOf(".") == -1 && row3 == row3.sort() ||
            col1.indexOf(".") == -1 && col1 == col1.sort() || col2.indexOf(".") == -1 && col2 == col2.sort() || col3.indexOf(".") == -1 && col3 == col3.sort() ||
            diagonal1.indexOf(".") == -1 && diagonal1 == diagonal1.sort() || diagonal2.indexOf(".") == -1 && diagonal2 == diagonal2.sort()){
            winningPlayer = currentPlayer;
            break;
        } 
        currentPlayer = (currentPlayer === "X" ? "O" : "X"); 
    }
    console.log(winningPlayer === "." ? "Draw" : `${winningPlayer} win!`);
})();

tictactoePlay();