function PlayerObject(playerName) {
    this.playerName = playerName;
    this.totalScore = 0;
    this.tempScore = 0;
}

let playerOne = new PlayerObject("player1");
let playerTwo = new PlayerObject("player2");

let currentPlayer = playerOne;

PlayerObject.prototype.switchPlayer = function () {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
    currentPlayer.tempScore = 0;
}

PlayerObject.prototype.rollDice = function () {
    let currentRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Player: " + currentPlayer.playerName, "Current Roll: " + currentRoll, "Temp Score: " + currentPlayer.tempScore, "Total Score: " + currentPlayer.totalScore); //random number
    if (currentRoll === 1) { //return if 1
        currentPlayer.switchPlayer();
    } else {
        currentPlayer.tempScore += currentRoll;
    } return currentPlayer;
}

$(document).ready(function () {
    $("#roll-dice").click(function (event) {
        event.preventDefault();
        currentPlayer.rollDice();
    })
    $("#hold").click(function (event) {
        event.preventDefault();
        currentPlayer.totalScore += currentPlayer.tempScore;
        currentPlayer.switchPlayer();
    })
    const playerOneScore = playerOne;
    const playerTwoScore = playerTwo;
    $("#player-one").text(`Player One Info: ${playerOneScore}`);
    $("#player-two").text(`Player Two Info: ${playerTwoScore}`);
})
