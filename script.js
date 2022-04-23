// ------------------- Global Constants ------------------- //
var timerID; // id of object returned by setInterval()
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// ------------------- Global Variables ------------------- //
var strikes = 0; // number of strikes - 3 is the upper-limit
var level = 0; // user's score
var time = 10; // number of seconds user has per level
var started = false; // if the game has started
var gamePlaying = false; // the current playing state of the game
var correctClick = false; //whether the click was the correct click in order

// ------------------- Global Arrays ------------------- //
var buttonColors = ["pink", "purple", "red", "blue", "green", "yellow"]; // available buttons on screen
var gamePattern = []; // randomly generated sequence -- added through nextSequence()
var userClickedPattern = []; // user clicked sequence -- added through click()


// ------------------- Pressing Start/Stop ------------------- //
// what happens when the user first presses any keyboard button
$(".action").click(function () {
  if ($(".action").text() === "Stop") {
    gameOver();
    $("#level-title").text(
      "You Have Stopped The Game. Press Start To Play Again!"
    );
    if (level == 1) {
      $("#strike-count").text(
        "Unfortunately, You Were Unable To Complete Any Level :("
      );
    } else {
      $("#strike-count").text("You Completed " + level + " Levels!");
    }
    startOver();
  } else if (
    $(".action").text() === "Start" &&
    started == false &&
    strikes < 3
  ) {
    $(".action").text("Stop");
    $("#level-title").text("Let's Go! Remember The Sequential Order");
    playSound(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/Let's%20Go.mp3?v=1650519027315"
    );
    gamePlaying = true;
    setTimeout(function () {
      nextSequence();
    }, nextClueWaitTime - level * 10);
    $("#strike-count").text("No Strikes Yet");
    started = true;
  }
});


// ------------------- Presentng The Ques ------------------- //
// adding a randomly generated color to our gamePattern[] array
function nextSequence() {
  level++;
  $("#timer").css("visibility", "visible");
  $("#level-title").text("Level " + level);
  var randomNumber = Math.round(Math.random() * 5);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  for (let i = 0; i < gamePattern.length; i++) {
    useRepeat(i);
  }
  startTimer();
}

function useRepeat(i) {
  resetTimer();
  setTimeout(function () {
    $("#" + gamePattern[i])
      .fadeOut(100)
      .fadeIn(100);
    playSound(gamePattern[i]);
  }, cluePauseTime * i);
}


// ------------------- Timer Code ------------------- //
// start timer
function startTimer() {
  timerID = setInterval(function () {
    if (time == 0) {
      stopTimer();
    } else {
      if (time == 1) {
        $("#timer").html(
          "<span>" + time + " Second</span> Remaining For Level " + level
        );
      } else {
        $("#timer").html(
          "<span>" + time + " Seconds</span> Remaining For Level " + level
        );
      }
      time = time - 1;
    }
  }, 1000);
  return true;
}

// resets the timer back to 10 seconds
function resetTimer() {
  clearInterval(timerID);
  time = 10;
}

// stops the timer
function stopTimer() {
  gameOver();
  $("#level-title").text("You Ran Out Of Time, Try Again!");
  if (level == 1) {
    $("#strike-count").text(
      "Unfortunately, You Were Unable To Complete Any Level :("
    );
  } else {
    $("#strike-count").text("You Completed " + level + " Levels!");
  }
  startOver();
}


// ------------------- Code For User Click  ------------------- //
// what happens when the user click any of the four buttons
$(".btn").click(function () {
  if (started == true) {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
    if (started == true) {
      playSound(userChosenColour);
      animatePress(userChosenColour);
    }
  }
});

// play sound for selected button which is also passed as the parameter
function playSound(name) {
  if (
    name != "red" &&
    name != "blue" &&
    name != "green" &&
    name != "yellow" &&
    name != "pink" &&
    name != "purple"
  ) {
    var audio = new Audio(name);
  } else if (name == "red") {
    var audio = new Audio(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/red.mp3?v=1650512207713"
    );
  } else if (name == "blue") {
    var audio = new Audio(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/blue.mp3?v=1650509387237"
    );
  } else if (name == "green") {
    var audio = new Audio(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/green.mp3?v=1650509387330"
    );
  } else if (name == "yellow") {
    var audio = new Audio(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/yellow.mp3?v=1650509387432"
    );
  } else if (name == "pink") {
    var audio = new Audio(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/Pink.mp3?v=1650521196302"
    );
  } else if (name == "purple") {
    var audio = new Audio(
      "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/Purple.mp3?v=1650521198911"
    );
  }
  audio.play();
}

// animates button by adding a class that has CSS properites with a 0.1 second delay
function animatePress(currentColor) {
  if (correctClick == true) {
    $("." + currentColor).addClass("correct");
    setTimeout(function () {
      $("." + currentColor).removeClass("correct");
    }, 350);
  } else if (correctClick == false) {
    $("." + currentColor).addClass("wrong");
    setTimeout(function () {
      $("." + currentColor).removeClass("wrong");
    }, 350);
  }
  correctClick = false;
}

// increments and checks strike value -- if reached limit then call gameOver()
function incrementStrike() {
  strikes++;
  if (strikes == 1) {
    $("#strike-count").text("Strike Number: " + strikes);
  } else if (strikes == 2) {
    $("#strike-count").text(
      "Strike Number: " + strikes + " - One Strike Left!"
    );
  } else if (strikes == 3) {
    gameOver();
    if (level == 1) {
      $("#strike-count").text(
        "3 Strikes and You Are Out! You Were Unable To Complete Any Level :("
      );
    } else {
      $("#strike-count").text(
        "3 Strikes and You Are Out! - You Completed " + level + " Levels!"
      );
    }
    gamePlaying = false;
    startOver();
  }
}


// ------------------- Validating User Response  ------------------- //
// checks if the user's pattern is identical to randomly generated pattern
// if same -- progress with 1 second delay
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    correctClick = true;
    if (userClickedPattern.length == gamePattern.length) {
      setTimeout(nextSequence, 1000);
      resetTimer();
      userClickedPattern = [];
    }
  }
  // if different
  // if srtike number<3 -- give another chance with same pattern
  else {
    incrementStrike();
    if (gamePlaying == true) {
      resetTimer();
      startTimer();
      $("#level-title").text("Try Again! Re-Enter The Entire Sequence");
      userClickedPattern = [];
    }
    //if strike number==3 -- game is over
    else if (gamePlaying == false) {
      correctClick = false;
      animatePress("btn");
      gameOver();
      $("#level-title").text("Game Over, Press Start Button to Play Again");
      startOver();
    }
  }
}


// ------------------- Wrapping Up The Game ------------------- //
// what happens when the user gets the sequence wrong
function gameOver() {
  clearInterval(timerID);
  // add class with CSS properties
  $("body").addClass("game-over");
  playSound(
    "https://cdn.glitch.global/bbe74dd5-384d-4e23-a294-5349cf89ef29/wrong.mp3?v=1650509387400"
  );

  // remove the breifly added CSS class after a 0.2 second delay
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);
  $("#timer").css("visibility", "hidden");
  gamePlaying = false;
}

// reset all variables -- called either when gameOver() or when "Stop" button is pressed
function startOver() {
  level = 0;
  strikes = 0;
  time = 10;
  gamePattern = [];
  userClickedPattern = [];
  started = false;
  $(".action").text("Start");
}
