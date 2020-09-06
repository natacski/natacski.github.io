
//------------------------ Game Project---------------------------
//Do you remember the game Battleship we created before? well .... it is time to make it with the DOM!!
//We are providing you with the design of a board (in the DOM) for a player1, you have to create the board for the player2 using the id property 'board_player2' -> it is the second list (ul) in your index.html file
//First ask the players for their names (use propmt)
//Now each time the turn player clicks on any cell of the opponent's board (you have to verify if the player is clicking the right board) the program needs to verify if there is an opponent's ship in that cell. If it is then the opponent has one less ship
//We want you to store the data of each player in two Player objects. Each object has to store: name, remaining boats, and their respective board.
//Each board needs to be initialized randomly with '0' and four '1' wich means the state of the cell. Numbers 1 are representing the 4 positions of the player's ships
//Also we want you to display the name of the turn player in the tag that has the id 'turn_player'. And if there is a winner  a text with: 'Congratulationes {name_player}!! you win'
//in the index.html file you are going to find 4 more ids: 'name_player1' , 'name_player2' , 'ships_player1' , 'ships_player2'. We want to see the information of each player in the respective elements
//As our previous Battleship, the winner is the player that hits the 4 opponent's ships first
//one more Thing create a 'reset' and a 'new game' buttons as childs of the element with the id 'buttons'. the reset button has to start the game again and the new game create a new game with new players and a new random board.

//player objects
let player1 = {};
let player2 = {};

//Filling the game board with ships
const fillGameBoard = () => {
  for (let index = 0; index < 4; index++) {
    let xCoord = getRandomInt(3);
    player1.gameBoard[index][xCoord] = 1;
  }
  document.getElementById("ships_player1").innerHTML = player1.shipCount;
  for (let index = 0; index < 4; index++) {
    let xCoord = getRandomInt(3);
    player2.gameBoard[index][xCoord] = 1;
  }
  document.getElementById("ships_player2").innerHTML = player2.shipCount;
};

//Generate a random number
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

//Create board player 1
const createBoardPlayer1 = () => {
  const board_Player1 = document.getElementById("board_player1");
  for (var x = 0; x < 4; x++) {
    const li = document.createElement("li"); // creating childs for the list (board), in this case represent a row number 'x' of the board
    for (var y = 0; y < 4; y++) {
      const cell = document.createElement("div");
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`; // saves the coordinates as a string value 'x,y'
      cell.value = 0; //state of the cell
      if (player1.gameBoard[y][x] === 1) {
        cell.setAttribute("has-ship", "1");
      } else {
        cell.setAttribute("has-ship", "0");
      }
      //this function adds the click event to each cell
      cell.addEventListener("click", (e) => {
        let cell = e.target; // get the element clicked
        console.log(cell.textContent); //display the coordinates in the console
        if (cell.attributes["has-ship"].value === "0") {
          cell.style.visibility = "hidden"; // this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
        } else {
          cell.style.background = "purple";
          player1.shipCount = player1.shipCount - 1;
          //update ship count in the page
          document.getElementById("ships_player1").innerHTML =
            player1.shipCount;
          if (player1.shipCount === 0) {
            alert(player2.name + " you WIN!");
            //we restart the game
            newGame();
          }
        } //with this propertie you can change the background color of the clicked cell. try comment the line bellow and uncomment this line. Do not forget to save this file and refresh the borwser to see the changes
        //switch players
        player1.isMyTurn = true;
        player2.isMyTurn = false;
        document.getElementById("turn_player").innerHTML = player1.name;
      });
      li.appendChild(cell); //adding each cell into the row number x
    }
    board_Player1.appendChild(li); //adding each row into the board
  }
};

//Create board player 2
const createBoardPlayer2 = () => {
  const board_Player2 = document.getElementById("board_player2");
  for (var x = 0; x < 4; x++) {
    const li = document.createElement("li"); // creating childs for the list (board), in this case represent a row number 'x' of the board
    for (var y = 0; y < 4; y++) {
      const cell = document.createElement("div");
      cell.className = "square"; // adding css properties to make it looks like a square
      cell.textContent = `${x},${y}`; // saves the coordinates as a string value 'x,y'
      cell.value = 0; //state of the cell
      if (player2.gameBoard[y][x] === 1) {
        cell.setAttribute("has-ship", "1");
      } else {
        cell.setAttribute("has-ship", "0");
      }
      //this function adds the click event to each cell
      cell.addEventListener("click", (e) => {
        let cell = e.target; // get the element clicked
        console.log(cell.textContent); //display the coordinates in the console
        if (cell.attributes["has-ship"].value === "0") {
          cell.style.visibility = "hidden"; // this  means that the contents of the element will be invisible, but the element stays in its original position and size / try it clicking on any of the black cells (in your browser) and see whats happens
        } else {
          cell.style.background = "purple";
          player2.shipCount = player2.shipCount - 1;
          //update ship count in the page
          document.getElementById("ships_player2").innerHTML =
            player2.shipCount;
          if (player2.shipCount === 0) {
            alert(player1.name + "  you WIN!");
            //restart the game
            newGame();
          }
        }
        //switch players
        player2.isMyTurn = true;
        player1.isMyTurn = false;
        document.getElementById("turn_player").innerHTML = player2.name;
      });
      li.appendChild(cell); //adding each cell into the row number x
    }
    board_Player2.appendChild(li); //adding each row into the board
  }
};

//starts a new game
const newGame = ( player1Name, player2Name) => {
  document.getElementById("board_player1").innerHTML = "";
  document.getElementById("board_player2").innerHTML = "";
  player1 = {
    isMyTurn: true,
    name: player1Name?player1Name: prompt('player 1 name: '),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };
  player2 = {
    isMyTurn: true,
    name: player2Name?player2Name: prompt('player 2 name: '),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
  };

  //calling functions
  fillGameBoard();
  createBoardPlayer1();
  createBoardPlayer2();

  //Displays name in the DOM
  if (player1.name != null) {
    document.getElementById("name_player1").innerHTML = player1.name;
  }
  if (player2.name != null) {
    document.getElementById("name_player2").innerHTML = player2.name;
  }
  document.getElementById("turn_player").innerHTML = player1.name;

};
newGame();

//reset the game
const restartGame = () => {
 newGame(player1.name, player2.name);
}

