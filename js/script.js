function PlayerObject(playerName) {
    this.playerName = playerName;
    this.totalScore = 0;
    this.tempScore = 0;
}

let playerOne = new PlayerObject("player1");
let playerTwo = new PlayerObject("player2");

let currentPlayer = playerOne;
let currentRoll = 0;

PlayerObject.prototype.switchPlayer = function () {
    if (currentPlayer === playerOne) {
        currentPlayer = playerTwo;
    } else {
        currentPlayer = playerOne;
    }
    currentPlayer.tempScore = 0;
}

PlayerObject.prototype.rollDice = function () {
    currentRoll = Math.floor(Math.random() * 6) + 1;
    console.log("Player: " + currentPlayer.playerName, "Current Roll: " + currentRoll, "Temp Score: " + currentPlayer.tempScore, "Total Score: " + currentPlayer.totalScore); //random number
    if (currentRoll === 1) { //return if 1
        currentPlayer.switchPlayer();
    } else {
        currentPlayer.tempScore += currentRoll;
    } return currentPlayer;
}

function playerOneHTML() {
    $("#player-one").html(`Player One Info:<br>Total score: ${playerOne.totalScore}<br>Current turn: ${playerOne.tempScore}`)
};

function playerTwoHTML() {
    $("#player-two").html(`Player Two Info:<br>Total score: ${playerTwo.totalScore}<br>Current turn: ${playerTwo.tempScore}`)
};

function currentRollHTML() {
    if (currentRoll === 1) {
        $("#current-roll").html("BUST!!!");
    } else {
        $("#current-roll").html(`Current roll: ${currentRoll}`);
    };
};

function currentPlayerHTML() {
    if (currentPlayer === playerOne) {
        $(".player1-glow").attr("id", "player1-glow");
        $("#player2-glow").removeAttr("id");
    } else {
        $("#player1-glow").removeAttr("id");
        $(".player2-glow").attr("id", "player2-glow");
    };
};

$(document).ready(function () {
    playerOneHTML();
    playerTwoHTML();
    currentRollHTML();
    currentPlayerHTML();

    $("#roll-dice").click(function (event) {
        event.preventDefault();
        currentPlayer.rollDice();
        playerOneHTML();
        playerTwoHTML();
        currentRollHTML();
        currentPlayerHTML();
        if (currentPlayer.tempScore + currentPlayer.totalScore >= 100) {
            if (alert(`${currentPlayer.playerName}, you won!!! Hit OK to play again!`)) { }
            else {
                window.location.reload();
            }
        };
    });
    $("#hold").click(function (event) {
        event.preventDefault();
        currentPlayer.totalScore += currentPlayer.tempScore;
        currentPlayer.switchPlayer();
        playerOneHTML();
        playerTwoHTML();
        currentRollHTML();
        currentPlayerHTML();
    });
});



// build marker for current player
// build out computer player option if everything is complete
// use two card views for each player that will display the running totals. Each will have their own buttons per card.