var startBtn = document.querySelector("#start");
var mainEl = document.querySelector("#main");
var timeEl = document.querySelector("#time");
let timerId;
let timeleft = 120;
let scoreEl = document.querySelector("#score");
startBtn.addEventListener("click", startMyQuiz);

let questions = [
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    answers: ["<script name='xxx.js'>",  "<script href='xxx.js'>", "<script src='xxx.js'>"],
    correctAnswer: "<script src='xxx.js'>"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["msg('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"],
    correctAnswer: "alert('Hello World')"
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: ["function myFunction()", "function = myFunction()", "function:myFunction()"],
    correctAnswer: "function myFunction()"
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: ["call myFunction()", "call function myFunction()", "myFunction()"],
    correctAnswer: "myFunction()"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: ["if i = 5", "if i == 5 then", "if (i == 5)", "if i = 5 then"],
    correctAnswer: "if (i == 5)"
  },
];
 let index=0;
 let currantQuestion = questions[index];
 let questionEl = document.querySelector("#question");
 let answersEl = document.querySelector("#answers");
  let answerBtns = document.querySelectorAll(".answer-btn");
  let answerBtn1 = document.querySelector("#answer1");
  let answerBtn2 = document.querySelector("#answer2");
  let answerBtn3 = document.querySelector("#answer3");
  let questionsDiv = document.querySelector("#question-div");

function startMyQuiz() {
let codeQuiz = document.querySelector("#code-quiz");
codeQuiz.style.display = "none";
timerId = setInterval(countdown, 1000);
scoreEl.textContent = "Time: " + timeleft;
 questionsDiv.removeAttribute("class");
showQuestion(); 
}

function showQuestion() {
  questionEl.textContent = currantQuestion.question;
  answerBtn1.textContent = currantQuestion.answers[0];
  answerBtn2.textContent = currantQuestion.answers[1];
  answerBtn3.textContent = currantQuestion.answers[2];
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