var location1 = 3;
var location2 = 4;
var location3 = 5;
var userGuess;
var userHits = 0;
var numberGuesses = 0;
var isSunk = false;

while (isSunk == false) {
  
  userGuess = prompt("Guess a number between 0 and 6.");
  
  if (userGuess < 0 || userGuess > 6) {
    
    alert("Only values between 0 and 6 are valid.");
    
  } else {
    
      numberGuesses = numberGuesses + 1;

      if (userGuess == location1 || userGuess == location2 || userGuess == location3) {
        alert("HIT!");
        userHits = userHits + 1;
      if (userHits == 3) {
          isSunk = true;
          alert("You sank my battleship!");
      }
      } else {
        alert("MISS!");
      }
    }
  }


var userStats = "You took " + numberGuesses + " guesses to sink my battleship, " + "which means your accuracy was " + (3/numberGuesses);

alert(userStats);