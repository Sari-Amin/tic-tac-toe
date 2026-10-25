
const popupPicker = document.getElementById("popup-picker");
const popupEndgame = document.getElementById("popup-endgame");

//for content change
const won = document.getElementById("won");
const wonRound = document.getElementById("wonround");
const turnText = document.getElementById("turn");
const xwindiv = document.getElementById("xwin");
const owindiv = document.getElementById("owin");
const tiediv = document.getElementById("tie");

const top = document.getElementById("top");
const bottom = document.getElementById("bottom");
const gameGrid = document.getElementById("game-grid");

const logoStart = document.getElementById("logo-start");
const ticStart = document.getElementById("tic-start");
const newStart = document.getElementById("new-start");

//buttons in the game
const newGamebtn = document.getElementById("newgame")
const xPickerbtn = document.getElementById("x")
const oPickerbtn = document.getElementById("o")
const quitbtn = document.getElementById("quit")
const nextRoundbtn = document.getElementById("next-round")
const restartbtn = document.getElementById("restart")


const gridContainer = document.getElementById('game-grid');
const gridItems = document.getElementsByClassName("grid-item");

let tictactoe = (function() {
    let gameboard = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    let turn = "X";
    let player1 = "";
    let player2 = "";
    let owin = 0;
    let xwin = 0;
    let ties = 0;
    let gameOver = false;

    const setPlayer1 = (player)=>{
        player1 = player
    }
    const getPlayer1 = ()=>{
      return player1;
    }

    const setPlayer2 = (player)=>{
      player2 = player;
    }
    const getGameover = ()=>{
      return gameOver;
    }

    const reset = ()=>{
      owin = 0;
      xwin = 0;
      ties = 0;
      gameboard = [".", ".", ".", ".", ".", ".", ".", ".", "."];
      turn = "X";
      player1 = "";
      player2 = "";
      gameOver = false;

    }

    const resetAfterGame = ()=>{
      gameboard = [".", ".", ".", ".", ".", ".", ".", ".", "."];
      turn = "X";
      gameOver = false;
    } 


    const win = () => {
      // winning boards
      const row1 = gameboard.slice(0,3);
      const row2 = gameboard.slice(3,6);
      const row3 = gameboard.slice(6,9);
      const col1 = gameboard.filter((_, index) => index % 3 == 0);
      const col2 = gameboard.filter((_, index) => index % 3 == 1);
      const col3 = gameboard.filter((_, index) => index % 3 == 2);
      const diagonal1 = gameboard.filter((_, index) => index % 4 == 0);
      const diagonal2 = [gameboard[2], gameboard[4], gameboard[6]];
      
      // check if the current player win(all seven possible wins)
      if (row1.indexOf(".") == -1 && (row1.indexOf("X") == -1 || row1.indexOf("O") == -1) || 
          row2.indexOf(".") == -1 && (row2.indexOf("X") == -1 || row2.indexOf("O") == -1) || 
          row3.indexOf(".") == -1 && (row3.indexOf("X") == -1 || row3.indexOf("O") == -1) ||
          col1.indexOf(".") == -1 && (col1.indexOf("X") == -1 || col1.indexOf("O") == -1)|| 
          col2.indexOf(".") == -1 && (col2.indexOf("X") == -1 || col2.indexOf("O") == -1) || 
          col3.indexOf(".") == -1 && (col3.indexOf("X") == -1 || col3.indexOf("O") == -1) ||
          diagonal1.indexOf(".") == -1 && (diagonal1.indexOf("X") == -1 || diagonal1.indexOf("O") == -1) || 
          diagonal2.indexOf(".") == -1 && (diagonal2.indexOf("X") == -1 || diagonal2.indexOf("O") == -1)){
          return true;
      }
      return false; 
    }

    const endGame = ()=>{
      popupEndgame.classList.remove("hidden");
      won.innerText = player1 == turn ? "YOU WON!" : "PLAYER 2 WON!";
      wonRound.innerText = turn + " TAKES ROUND";
      wonRound.classList.remove("x","o");
      wonRound.classList.add(turn.toLowerCase());
    }

    const insertCurrentPlay = (id)=>{

      const currentGrid = document.getElementById(id);
      const op = turn == "X" ? "o" : "x";
      currentGrid.classList.remove("x","o");
      turnText.classList.remove("x","o");

      currentGrid.classList.add(turn.toLowerCase());
      currentGrid.innerText = turn;
      turnText.innerText = op.toUpperCase() + " TURN";
      turnText.classList.add(op);
    }


    const play = (id) => {
      if (gameboard[id] != "."){
        return false;
      }
      gameboard[id] = turn;

      const w = win();
      insertCurrentPlay(id);

      if(w){
        endGame();
        if (turn == "X"){
          xwin += 1;
          xwindiv.innerText = xwin;
        }else{
          owin += 1;
          owindiv.innerText = owin;
        }
      }

      turn = (turn === "X" ? "O" : "X"); 

      // if board is full(draw)
      if(gameboard.indexOf(".") === -1 && !w){
          popupEndgame.classList.remove("hidden");
          won.innerText = "DRAW!";
          wonRound.innerText = "DRAW!";
          wonRound.classList.remove("x", "o");
          wonRound.classList.add("draw");
          ties += 1
          tiediv.innerText = ties;
          gameOver = true;
        }
      gameOver = gameOver || w;
    }

    const clearGrid = (data)=>{
      for(const element of gridItems){
        element.innerText = "";
      }
      if(data){
        
        xwindiv.innerText = 0;
        owindiv.innerText = 0;
        tiediv.innerText = 0;
      }
    }
  
    return {setPlayer1, setPlayer2, getPlayer1, reset, play,resetAfterGame,clearGrid, getGameover};
  })();




newGamebtn.addEventListener("click", function(){
    
  popupPicker.classList.remove("hidden");

}
);

xPickerbtn.addEventListener("click", () => {
  top.classList.remove("hidden");
  bottom.classList.remove("hidden");
  gameGrid.classList.remove("hidden");
  popupPicker.classList.add("hidden");
  logoStart.classList.add("hidden");
  ticStart.classList.add("hidden");
  newStart.classList.add("hidden");
  tictactoe.setPlayer1("X");
  tictactoe.setPlayer2("O");
});

oPickerbtn.addEventListener("click", () => {
  top.classList.remove("hidden");
  bottom.classList.remove("hidden");
  gameGrid.classList.remove("hidden");
  popupPicker.classList.add("hidden");
  logoStart.classList.add("hidden");
  ticStart.classList.add("hidden");
  newStart.classList.add("hidden");
  tictactoe.setPlayer1("O");
  tictactoe.setPlayer2("X");

});

quitbtn.addEventListener("click", () => {
  top.classList.add("hidden");
  bottom.classList.add("hidden");
  gameGrid.classList.add("hidden");
  logoStart.classList.remove("hidden");
  ticStart.classList.remove("hidden");
  newStart.classList.remove("hidden");
  popupEndgame.classList.add("hidden");
  tictactoe.reset();
  tictactoe.clearGrid(true);
});

nextRoundbtn.addEventListener("click", () => {
  
  popupEndgame.classList.add("hidden");
  tictactoe.resetAfterGame();
  tictactoe.clearGrid(false);

});

restartbtn.addEventListener("click", () => {
  tictactoe.resetAfterGame();
  tictactoe.clearGrid(false);
});

gridContainer.addEventListener('click', (e) => {
  // Find the closest element with the class 'grid-item' 
  const clickedItem = e.target.closest('.grid-item');
  
  // If the user clicked outside an item (like in the gaps), do nothing
  if (!clickedItem || tictactoe.getGameover()) return;


  const itemId = clickedItem.dataset.id - 1;
  tictactoe.play(itemId);

});
