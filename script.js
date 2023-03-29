var startBtn = document.querySelector("#start");
var mainEl = document.querySelector("#main");
var timeEl = document.querySelector("#time");
let timerId;
let timeleft = 120;
let scoreEl = document.querySelector("#score");
startBtn.addEventListener("click", startMyQuiz);

function startMyQuiz() {
let codeQuiz = document.querySelector("#code-quiz");
codeQuiz.style.display = "none";
timerId = setInterval(countdown, 1000);
scoreEl.textContent = "Time: " + timeleft;
  
}

function countdown() {
  if (timeleft <= 0) {
    clearTimeout(timerId);
    endQuiz();
  } else {
    scoreEl.textContent = "Time: " + timeleft;
    timeleft--;
  }
}
 
function endQuiz() {
  scoreEl.textContent = "Time: " + timeleft;
  let endQuiz = document.querySelector("#endQuiz");
  endQuiz.style.display = "block";
  mainEl.style.display = "none";
}

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