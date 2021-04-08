function allPlayerCallOuts() {
    playerOneHTML();
    playerTwoHTML();
    currentPlayerHTML();
    diceImage();
}

function PlayerObject(playerName) {
    this.playerName = playerName;
    this.totalScore = 0;
    this.tempScore = 0;
}

let playerOne = new PlayerObject("player1");
let playerTwo = new PlayerObject("player2");
let computer = new PlayerObject("computer")

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
    currentRoll = Math.floor(Math.random() * 6) + 1; //random number
    if (currentRoll === 1) { //return if 1
        currentPlayer.switchPlayer();
    } else {
        currentPlayer.tempScore += currentRoll;
    } return currentPlayer;
}

function computerHold() {
    currentPlayer.totalScore += currentPlayer.tempScore;
    currentPlayer.switchPlayer();
}

PlayerObject.prototype.computerRollDice = function () {
    let computerArray = [computerRollDice(), computerHold()]
    currentRoll = Math.floor(Math.random() * 6) + 1; //random number
    if (currentRoll === 1) { //return if 1
        currentPlayer.switchPlayer();
    } else {
        currentPlayer.tempScore += currentRoll;
        const random = Math.floor(Math.random() * computerArray.length - 1)
        computerArray[random];
        console.log(random);
    } return currentPlayer;
}

function playerOneHTML() {
    $("#player-one").html(`Total score: ${playerOne.totalScore}<br>Current turn: ${playerOne.tempScore}`)
};

function playerTwoHTML() {
    $("#player-two").html(`Total score: ${playerTwo.totalScore}<br>Current turn: ${playerTwo.tempScore}`)
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

function diceImage() {
    if (currentRoll === 1) {
        $("img").attr("src", "/img/one.png")
        $(".dice-glow").attr("id", "dice-glow");
    } else if (currentRoll === 2) {
        $("img").attr("src", "/img/two.png")
        $("#dice-glow").removeAttr("id");
    } else if (currentRoll === 3) {
        $("img").attr("src", "/img/three.png")
        $("#dice-glow").removeAttr("id");
    } else if (currentRoll === 4) {
        $("img").attr("src", "/img/four.png")
        $("#dice-glow").removeAttr("id");
    } else if (currentRoll === 5) {
        $("img").attr("src", "/img/five.png")
        $("#dice-glow").removeAttr("id");
    } else if (currentRoll === 6) {
        $("img").attr("src", "/img/six.png")
        $("#dice-glow").removeAttr("id");
    } else {
        $("#dice-glow").removeAttr("id");
    }
}

$(document).ready(function () {
    // $("#select-player").submit(function (event) {
    //     event.preventDefault()

    allPlayerCallOuts()
    // console.log(parseInt($("#player-select").val()));
    // if (parseInt($("#player-select").val() === 2)) {
    $("#roll-dice").click(function (event) {
        event.preventDefault();
        currentPlayer.rollDice();
        allPlayerCallOuts()
        if (currentPlayer.tempScore + currentPlayer.totalScore >= 100) {
            if (alert(`${currentPlayer.playerName}, you won!!! Hit OK to play again!`)) { }
            else {
                window.location.reload();
            }
        };
    })
    $("#hold").click(function (event) {
        event.preventDefault();
        currentPlayer.totalScore += currentPlayer.tempScore;
        currentPlayer.switchPlayer();
        allPlayerCallOuts()
    })
});




// build out computer player option if everything is complete
// use two card views for each player that will display the running totals. Each will have their own buttons per card.