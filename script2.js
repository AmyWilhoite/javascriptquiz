console.log("this page works!!")

// define variables for display on HTML using Queryselector
var questionEl = document.querySelectorAll("getQuestion");
var timerEl = document.getElementById("timer");



// tried creating construction function using objects
function QuestionFactory (questions, answers, correctAns){
    this.question = questions;
    this.answer = answers;
    this.correctAns = correctAns;
    // i can create a method/function to return correct answer
    // document.getElementById(checkAnswer).onclick = function(){need to enter code to check}
 
}

// created a function for each question using the construction model
var question1 = new QuestionFactory("An API interacts with programs in:", ["browsers", "scripts", "platforms", "all of the above"], "browser");
console.log(question1);

var question2 = new QuestionFactory("Which of the following is a string?", ["cat", "25", "true or false", "Null"], "cat");
console.log(question2)
document.getElementById("getQuestion").innerHTML= "Question:" + question2.questions;

var question3 = new QuestionFactory("Which of the following is a loop:", ["While", "Click", "Return", "All of the above"], "While" );
console.log(question3)
document.getElementById("getQuestion").innerHTML= "Question:" + question3.questions;

var question4 = new QuestionFactory("WWOWOW", ["While", "Click", "Return", "All of the above"], "While", "Answer Correct" );
console.log(question4)
document.getElementById("getQuestion").innerHTML= "Question:" + question4.questions;



// Timer Section
// need to set start time 
var secondsLeft = 30;

// function to get my timer to count down
var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds Remaining";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to message user game over
      timerEl.textContent = "GAME OVER!"
    }
}, 1000);


// deductions by 5 seconds if incorrect 

// score
// score display high score
