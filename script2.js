console.log("this page works!!")

// define variables for display on HTML using Queryselector
var questionEl = document.querySelector("#getQuestion");
var answer1El = document.querySelector("btn1");
var answer2El = document.querySelector("btn2");
var answer3El = document.querySelector("btn2");
var answer4El = document.querySelector("btn4");
var timerEl = document.getElementById("timer");
var scoreEl = document.querySelector("#score");
var mainContainerEl = document.querySelector("#main");


// tried creating construction function using objects easily to create more questions if needed
function QuestionFactory (questions, answers, correctAns){
    this.question = questions;
    this.answer = answers;
    this.correctAns = correctAns;
}
    // i can create a method/function to insert here return correct answer
    // this.getElementById(checkAnswer).onclick = function()){
        // if (correctAns === true){ } }


// created objects that contain all the data for each question using the construction model

var question1 = new QuestionFactory("An API interacts with programs in:", ["browsers", "scripts", "platforms", "all of the above"], "browser");
console.log(question1.question);
console.log(question1.answers);
console.log(question1.correctAns);

var question2 = new QuestionFactory("Which of the following is a string?", ["cat", "25", "true or false", "Null"], "cat");

var question3 = new QuestionFactory("Which of the following is a loop:", ["While", "Click", "Return", "All of the above"], "While" );

var question4 = new QuestionFactory("WWOWOW", ["While", "Click", "Return", "All of the above"], "While", "Answer Correct" );
console.log(question4)

// get question 1 and array of answers to 1 to show up on screen
// use myJSON to stringify some of this so we can retrieve object
questionEl.textContent = "Question: " + question1.question;
answer1El.textContent = question1.answers[0];



// create event listener to listen for user click and check to see if it matches correctAns
// var numberofAnswers = document.querySelectorAll(".bstyle").length;
// var userInput ="";
// var scoreStart = 0;
// var updateScore = 

// for (var i =0; i < numberofAnswers; i++) {
// document.querySelectorAll(".bstyle")[i].addEventListener("click", function(){
//      if (userInput === correctAns);
//     // updateScore = scoreStart + i + 5
//     scoreEl.textContent = "test" 
//     });

// }
// if answer is correct, increase score by 5 points else decrease timer time by 5 seconds



// Timer Section --- this is working just need to make sure it deducts time when answer is incorrect
// start time 
var secondsLeft = 30;

// function to get my timer to count down
var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds Remaining";

    if(secondsLeft === 0) {
      // Stops set interval
      clearInterval(timerInterval);
      // message user game over
      timerEl.textContent = "GAME OVER!"
    }
}, 1000);


// deductions by 5 seconds if incorrect 
// document.getElementById(id).onclick = function(){code}

// score i believe local storage / log high score.
