console.log(message);
var question = prompt('What is the answer to the Ultimate Question of Life, the Universe, and Everything?');
var answer = 42;
var message = "The answer to the question '" + question + "' is " + answer + ".";
console.log(message);
var question = prompt('how much wood would a woodchuck chuck if a woodchuck could chuck wood?');
var answer = "a lot";
var message = "The answer to the question '" + question + "' is " + answer + ".";
console.log(message);
var question = prompt('What is the airspeed velocity of an unladen swallow?');
var answer = "African or European?";
var message = "The answer to the question '" + question + "' is " + answer + ".";
console.log(message);
var question = prompt('Who is the best student in the class?');
var answer = "I am";
var message = "The answer to the question '" + question + "' is " + answer + ".";

submitEl.addEventListener("click", showResponse);

var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function sendMessage() {
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();


























