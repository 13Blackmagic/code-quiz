var startBtn = document.querySelector("#start");
var mainEl = document.querySelector("#main");
var timeEl = document.querySelector("#time");
startBtn.addEventListener("click", function() {
  var question = showMessage("What is the answer to the Ultimate Question of Life, the Universe, and Everything?");
  if (question === "42") {
    alert("Correct!");
  } else {
    alert("Wrong!");
  var question = showMessage("How much wood would a woodchuck chuck if a woodchuck could chuck wood?");
  if (question === "a lot") {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  var question = showMessage("What is the airspeed velocity of an unladen swallow?");
  if (question === "African or European?") {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  var question = showMessage("Who is the best student in the class?");
  if (question === "I am") {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
  }
});
function question () {
  var question = timerInterval;
  var answer = 42;
  var message = "The answer to the question '" + question + "' is " + answer + ".";
  console.log(message);
}

// Selects element by id
function showMessage(message) {
  var question = prompt(message);
  return question;
}

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function showAnswer() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}