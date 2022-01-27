console.log("this page works!!")

// define variables for display on HTML using getElement or querySelector
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var questionEl = document.getElementById("getQuestion");
var answerEl = document.getElementById("getAnswer"); //also container for answers - trying several ways
var answerEl1 = document.getElementById("btn1");
var answerEl2 = document.getElementById("btn2");
var answerEl3 = document.getElementById("btn3");
var answerEl4 = document.getElementById("btn4");
var returnAns = document.getElementById ("returnAns");



// Tried using the construction function because I want to learn objects better AND
// I thought this would be cool to use if I had many questions or data to add more easily in the future
function QuestionFactory (questions, answers, correctAns){
    this.questions = questions;
    this.answers = answers;
    this.correctAns = correctAns;
// i want to create a method/function to insert here return correct answer for each question automatically if possible 
// if onclick event for answers [index item] === correctAnswer then + 5 to scoreEl else = =5 seconds to timeEl
    }


// created objects that contain all the data for each question using the construction model
// so i could easily create or change out questions in the future 

var question1 = new QuestionFactory("An API interacts with programs in:", ["browsers", "scripts", "platforms", "all of the above"], "browser");
// i  wanted to know if this formula is working
console.log(question1.questions);
console.log(question1.answers);
console.log(question1.correctAns);

questionEl.textContent = "Question 1: "+ question1.questions;
answerEl1.textContent = question1.answers[0];
answerEl2.textContent = question1.answers[1];
answerEl3.textContent = question1.answers[2];
answerEl4.textContent = question1.answers[3];

var question2 = new QuestionFactory("Which of the following is a string?", ["cat", "25", "true or false", "Null"], "cat");
var question3 = new QuestionFactory("Which of the following is a loop:", ["While", "Click", "Return", "All of the above"], "While" );

// Added event listener for if answer click is correct answer, correct + 5 pts to score otherwise -5 seconds to timer
// To Do: this sort of works but not the way it's supposed to
// answerEl.addEventListener("click", function(){
//     if (this.answers === this.correctAns) {
//         alert ("love your mom");
//         scoreEl.textContent +5;
//     }else {
//         alert("your bad")
//         timerEl = timerInterval -5;
//     }
// })

// another try at this correct answer return function
// add listener to section of HTML defined as answerEl
answerEl.addEventListener("click", function(event){
    // add variable for event "click and the target button item"
    var clickedAns = event.target;

    if (this.answers === this.correctAns) {
        returnAns.textContent.innerHTML ("CORRECT + 5 points!!");
        var storeScore = answerEl
        scoreEl.textContent +5;
    }else {
        returnAns.textContent(innerHTML)("INCORRECT - lose 5 seconds")
        timerEl = timerInterval -5;
    }
    clickedAns.returnAns;
});


// To-Do: I was hoping this constructor function including a method would help me loop question1,2,3 with data flowing to proper locations on html
    // set onclick attribute to all available options
    // for(i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)");


// To Do: Write a formula to score and store user high score
// for (var i =0; i < numberofAnswers; i++) {
// document.querySelectorAll(".bstyle")[i].addEventListener("click", function(){
//      if (userInput === correctAns);
//     // updateScore = userScore + 5
//     scoreEl.textContent = "test" 
//     });

// }

// Timer Section 
// To-do: Timer deducts time when answer is incorrect

// start time
var secondsLeft = 60;

// Timer countdown using setInterval
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


// // subtractTime.addEventListener("click", function() {
//     if (count > 0) {
//       count--;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });


// deductions by 5 seconds if incorrect 
// document.getElementById(id).onclick = function(){code}

// score i believe local storage / log high score
