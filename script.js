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
var endQuiz = document.querySelector("#endQuiz");


let questions = [
  {
    question: "What is the Answer to life and the univers?",
    answers: ["42", "89", "63"],
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
let index = 0;
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

function endQuiz() {
  let codeQuiz = document.querySelector("#code-quiz");
  codeQuiz.style.display = "none";
  endQuiz.style.display = "block";
  showresults.style.display = "block";
  clearInterval(timerId);
}

function checkAnswer() {
  if (this.textContent === currantQuestion.correctAnswer) {
    console.log("correct");
  } else {
    console.log("wrong");
  }
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    endQuiz;
  }
}

function move() {
  var elem = document.getElementByID("timeleft");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
    }
  }
}

function showQuestion() {
  if  (index<questions.length) {
  currantQuestion = questions[index];
  answerBtn1.textContent = currantQuestion.answers[0];
  questionEl.textContent = currantQuestion.question;
  answerBtn2.textContent = currantQuestion.answers[1];
  answerBtn3.textContent = currantQuestion.answers[2];
  question = currantQuestion.question;

  answerBtn1.addEventListener("click", function () {
    userAnswer = answerBtn1.textContent;

  });
  } else {
    endQuiz();
  }
}

const str = undefined;



var showresults = document.getElementById("showresults");
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

function question() {
  var question = timerInterval;
  var answer = 42;
  var message = "The answer to the question '" + question + "' is " + answer + ".";
  console.log(message);
}

// Selects element by id
function showAnswer() {
  var timeEl = document.querySelector("timeleft");
  timeEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

// Function to create and append colorsplosion image
function showAnswer() {
  var timeEl = document.querySelector("#time");
  timeEl.textContent = " ";

}

function showresults () {
  var endQuiz = document.querySelector("#endQuiz");
  endQuiz.style.display = "block";
  var showresults = document.querySelector("#showresults");
  showResults.style.display = "block";
}