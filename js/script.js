let tictactoe = (function() {
    let gameboard = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    let turn = "X";
    let player1 = "";
    let player2 = "";
    let owin = 0;
    let xwin = 0;
    let ties = 0;
    let winningPlayer = ".";

    
    // check if there is place to play 
    while (gameboard.indexOf(".") != -1){

        //check and play in postion that is possible
        currentPlay = +prompt("Enter place where you want to play(012345678): ");
        while (gameboard[currentPlay] != "."){
            currentPlay = +prompt("Enter valid place where you want to play(012345678): ");
        }
        gameboard[currentPlay] = turn;

        // winning boards
        row1 = gameboard.slice(3);
        row2 = gameboard.slice(3,6);
        row3 = gameboard.slice(6,9);
        col1 = gameboard.filter((_, index) => index % 3 == 0);
        col2 = gameboard.filter((_, index) => index % 3 == 1);
        col3 = gameboard.filter((_, index) => index % 3 == 2);
        diagonal1 = gameboard.filter((_, index) => index % 4 == 0);
        diagonal2 = [gameboard[2], gameboard[4], gameboard[6]];
        
        // check if the current player win(all seven possible wins)
        if (row1.indexOf(".") == -1 && row1 == row1.sort() || row2.indexOf(".") == -1 && row2 == row2.sort() || row3.indexOf(".") == -1 && row3 == row3.sort() ||
            col1.indexOf(".") == -1 && col1 == col1.sort() || col2.indexOf(".") == -1 && col2 == col2.sort() || col3.indexOf(".") == -1 && col3 == col3.sort() ||
            diagonal1.indexOf(".") == -1 && diagonal1 == diagonal1.sort() || diagonal2.indexOf(".") == -1 && diagonal2 == diagonal2.sort()){
            winningPlayer = turn;
            break;
        } 
        //change player turn
        turn = (turn === "X" ? "O" : "X"); 
    }
    console.log(winningPlayer === "." ? "Draw" : `${winningPlayer} win!`);
    return {};
})();

tictactoePlay();

const popupPicker = document.getElementById("popup-picker");
const popupEndgame = document.getElementById("popup-endgame");

const top = document.getElementById("top");
const bottom = document.getElementById("bottom");
const gameGrid = document.getElementById("game-grid");

const logoStart = document.getElementById("logo-start");
const ticStart = document.getElementById("tic-start");
const newStart = document.getElementById("new-start");

const newGamebtn = document.getElementById("newgame")
const xPickerbtn = document.getElementById("x")
const oPickerbtn = document.getElementById("o")
const quitbtn = document.getElementById("quit")
const nextRoundbtn = document.getElementById("next-round")
const restartbtn = document.getElementById("restart")




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

});

oPickerbtn.addEventListener("click", () => {
  top.classList.remove("hidden");
  bottom.classList.remove("hidden");
  gameGrid.classList.remove("hidden");
  popupPicker.classList.add("hidden");
  logoStart.classList.add("hidden");
  ticStart.classList.add("hidden");
  newStart.classList.add("hidden");
  popupEndgame.classList.remove("hidden");

});

quitbtn.addEventListener("click", () => {
  top.classList.add("hidden");
  bottom.classList.add("hidden");
  gameGrid.classList.add("hidden");
  logoStart.classList.remove("hidden");
  ticStart.classList.remove("hidden");
  newStart.classList.remove("hidden");
  popupEndgame.classList.add("hidden");

});

nextRoundbtn.addEventListener("click", () => {
  
  popupEndgame.classList.add("hidden");

});

const gridContainer = document.getElementById('gridContainer');

gridContainer.addEventListener('click', (e) => {
  // Find the closest element with the class 'grid-item' 
  // (This handles clicks on text or sub-elements inside the item too)
  const clickedItem = e.target.closest('.grid-item');
  
  // If the user clicked outside an item (like in the gaps), do nothing
  if (!clickedItem) return;

  // 1. Clear 'active' class from all other grid items
  const allItems = gridContainer.querySelectorAll('.grid-item');
  allItems.forEach(item => item.classList.remove('active'));

  // 2. Add 'active' class to the newly clicked item
  clickedItem.classList.add('active');

  // 3. Grab data from the clicked item
  const itemId = clickedItem.dataset.id;
  console.log(`You clicked grid item ID: ${itemId}`);
});
