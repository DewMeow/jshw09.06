let game = {
    playerField: [],
    computerField: [],
    playerShips: [],
    computerShips: [],
    currentPlayer: "player",
    gameMode: "human-computer",
    computerMode: "random",
    theme: "light",
    paused: false,
    stopped: false,
  };
  
  document.getElementById("new-game-btn").addEventListener("click", initGame);
  
  function initGame() {
    game.playerField = createField(10);
    game.computerField = createField(10);
    game.playerShips = [];
    game.computerShips = [];
    game.currentPlayer = "player";
    game.paused = false;
    game.stopped = false;
    renderFields();
  }
  
  function createField(size) {
    let field = [];
    for (let i = 0; i < size; i++) {
      field[i] = [];
      for (let j = 0; j < size; j++) {
        field[i][j] = 0; 
      }
    }
    return field;
  }
  
  function renderFields() {
    let playerTable = document.getElementById("player-table");
    let computerTable = document.getElementById("computer-table");
    playerTable.innerHTML = "";
    computerTable.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      let row = playerTable.insertRow();
      let row2 = computerTable.insertRow();
      for (let j = 0; j < 10; j++) {
        let cell = row.insertCell();
        let cell2 = row2.insertCell();
        cell.textContent = game.playerField[i][j] === 1 ? "S" : "";
        cell2.textContent = game.computerField[i][j] === 1 ? "S" : "";
        cell.onclick = (function (x, y) {
          return function () {
            if (
              game.currentPlayer === "player" &&
              !game.paused &&
              !game.stopped
            ) {
              shoot(x, y, "player");
            }
          };
        })(i, j);
      }
    }
  }
  
  function shoot(x, y, shooter) {

  }
  