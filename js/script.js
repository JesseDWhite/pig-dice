function PlayerObject(playerName, totalScore, tempScore) {
    this.playerName = playerName;
    this.totalScore = totalScore;
    this.tempScore = tempScore;
  }
  
  function switchPlayer() {
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else {
      currentPlayer = playerOne;
    }
    currentPlayer.tempScore = 0;
  }
  
  
  PlayerObject.prototype.rollDice = function() {
    let currentRoll = Math.floor(Math.random() * 6) + 1 //random number
    if (currentRoll === 1) { //return if 1
      return totalScore;
    } else {
      this.tempScore += currentRoll; //add if !one
      let myChoice = prompt("Would you like to roll again?")
      if (myChoice) {
        rolldice
      } else {
        totaSCore += tempScore;
        playerSwitch;
      }
  
  
      /*     } else */
      /* Promt user to hold or roll again? 
      if hold is called then we need to add tempScore to Total score.
      When do we swithch players 
      */
  
  
  
  
    }
  }
  
  
  
  
  
  
  //roll random number between 1-6 random
  //branch based on results of 1 || any other
  //break out on 1
  //add to score on any other
  //option to end turn on hold
  
  
  //two objects per player
  // object will trask total score and score to add as well as score to remove
  //player 1 and player name input
  /* Roll button adds points to temp var until 1 is tolled or hold button is pushed */
  //let tempScore = inboundPlayerScore
  //bool firstTime = true;
  /* 
  playerObject.rollDice = function() {
    
    if(firstTIme === true) {
      tempScore = score;
      firstTime = false;
    }
    
    let randomNum = (math.random(floor-6))
    if(randomNum === 1) {
      return score;
    } else {
      tempScore += randomNum;
      
    }
    
    
  } */