var wins = 0;
var losses = 0;
var startBtn = document.querySelector("#start");
var mainEl = document.querySelector("#main");
var timeEl = document.querySelector("#time");
let timerId;
let timeleft = 120;
let scoreEl = document.querySelector("#score");
startBtn.addEventListener("click", startMyQuiz);
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");



let questions = [
  {
    question: "What is the Answer to life and the univers?",
    answers: ["42",  "89", "63"],
    correctAnswer: "89"
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["msg('Hello World')", "alert('Hello World')", "msgBox('Hello World')", "alertBox('Hello World')"],
    correctAnswer: "alert('Hello World')"
  },
  {
    question: "How much would could a woodchuck chuck if a woodchuck could chuck wood?",
    answers: ["A lot", "More than a Beaver", "Too much for a skunk"],
    correctAnswer: "Too much for a skunk"
  },
  {
    question: "Why did I let the fish go?",
    answers: ["Because he bit my finger", "Because he brought up childehood trauma", "Because he was a fish"],
    correctAnswer: "Because he bit my finger"
  },
  {
    question: "Why will you give me 100% on this homework?",
    answers: ["Because it's awsome", "Because your awsome", "Because you thought it was funny"],
    correctAnswer: "Because you thought it was funny"
  },
  {
    question: "What is the answer to the question?",
    answers: ["42", "89", "63"],
    correctAnswer: "42"
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
  let answerBtnsDiv = document.querySelector("#answer-btns-div");
  let answerBtnsDiv2 = document.querySelector("#answer-btns-div2");
  let answerBtnsDiv3 = document.querySelector("#answer-btns-div3");
  answerBtn1.addEventListener("click", checkAnswer);
  answerBtn2.addEventListener("click", checkAnswer);
  answerBtn3.addEventListener("click", checkAnswer);


function startMyQuiz() {
let codeQuiz = document.querySelector("#code-quiz");
codeQuiz.style.display = "none";
scoreEl.textContent = "Time: " + timeleft;
 questionsDiv.removeAttribute("class");
showQuestion(); 
}

function checkAnswer() {
  if (this.textContent === currantQuestion.correctAnswer) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  index++;
  showQuestion();
}


function showQuestion() {
  currantQuestion = questions[index];
  answerBtn1.textContent = currantQuestion.answers[0];
  questionEl.textContent = currantQuestion.question;
  answerBtn2.textContent = currantQuestion.answers[1];
  answerBtn3.textContent = currantQuestion.answers[2];
  question = currantQuestion.question;

  answerBtn1.addEventListener("click", function() {
    userAnswer = answerBtn1.textContent;
    
  });

}

const str = undefined;

function endQuiz() {
  if (timeleft <= 0) {
    clearTimeout(timerId);
    endQuiz();
  } else {
    scoreEl.textContent = "Time: " + timeleft;
    timeleft--;
  }
}

var showresults = document.getElementById("showresults");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

function question () {
  var question = timerInterval;
  var answer = 42;
  var message = "The answer to the question '" + question + "' is " + answer + ".";
  console.log(message);
}

// Selects element by id
function showAnswer() {
  var timeEl = document.querySelector("#time");
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

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
}
var endQuiz = document.querySelector("#endQuiz");