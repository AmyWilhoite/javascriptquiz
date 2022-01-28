console.log("this page works!! 2nd Method to achieve this homework!")
console.log("Im trying to add a method to this constructor function that carries out the function of checking answer then loop through the question - my method may not be best. Im committed!")

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

// To do: optional: i want to create a method/function to insert here return correct answer for each question automatically if possible 
// if onclick event for answers [index item] === correctAnswer then + 5 to scoreEl else = =5 seconds to timeEl
    }


// created objects that contain all the data for each question using the construction model
// so i could easily create or change out questions in the future
var questionsList = [
    {
        question : "An API interacts with programs in:", 
        answers: ["browser", "scripts", "platforms", "all of the above"], 
        correctAns: "browser"
    }, 
    {
        question : "Which of the following is a string?", 
        answers: ["cat", "25", "true or false", "Null"],
        correctAns: "cat"
    }, 
    
]; 
var currentIndex = 0 ; 


console.log(questionsList);
console.log("Question 1" , questionsList[currentIndex].question);
console.log("Question 1" , questionsList[currentIndex].answers[0]);
console.log("Question 1" , questionsList[currentIndex].answers[1]);
console.log("Question 1" , questionsList[currentIndex].answers[3]);
console.log("Question 1" , questionsList[currentIndex].answers[4]);
console.log("Question 1" , questionsList[currentIndex].correctAns)  ;



var question1 = new QuestionFactory("An API interacts with programs in:", ["browser", "scripts", "platforms", "all of the above"], "browser");
// i  wanted to know if this formula is working
console.log(question1.questions);
console.log(question1.answers);
console.log(question1.correctAns);

// this is how i got display in browser, i'd like create a loop through questions once fully developed construction method applies to that section
questionEl.textContent = "Question 1: "+ question1.questions;
answerEl1.textContent = question1.answers[0];
answerEl2.textContent = question1.answers[1];
answerEl3.textContent = question1.answers[2];
answerEl4.textContent = question1.answers[3];
//Adding event listener 
answerEl1.addEventListener("click", checkAnswer); 
answerEl2.addEventListener("click", checkAnswer); 
answerEl3.addEventListener("click", checkAnswer); 
answerEl4.addEventListener("click", checkAnswer); 

//move to next question 
currentIndex++; 

var question2 = new QuestionFactory("Which of the following is a string?", ["cat", "25", "true or false", "Null"], "cat");
console.log(question2.questions);
console.log(question2.answers);
console.log(question2.correctAns);

var question3 = new QuestionFactory("Which of the following is a loop:", ["While", "Click", "Return", "All of the above"], "While" );
console.log(question3.questions);
console.log(question3.answers);
console.log(question3.correctAns);


// Version 1 function for constructor object attempted: listener for if answer click is correct answer, correct + 5 pts to score otherwise -5 seconds to timer
// To Do: this sort of works but not the way it's supposed to
// answerEl.addEventListener("click", function(){
//     if (this.answers === this.correctAns) {
//         alert ("my random text");
//         scoreEl.textContent +5;
//     }else {
//         alert("something else here")
//         timerEl = timerInterval -5;
//     }
// })



// TO-DO #1 Add event listener to onclick button not working, then if else reduce time
// Version 2 function for constructor object attempted: function for listening to click then performing checkedAnser at this correct answer return function
// add listener to section of HTML container defined element as answerEl
var storeScore
var storeScore = 0;
var feedbackEL = document.getElementById("feedback"); 

function checkAnswer(){
    console.log("button clicked", this.textContent, question1.correctAns ); 
    if (this.textContent === question1.correctAns) {
        storeScore += 5; 
        feedbackEL.textContent = "CORRECT", storeScore, "points!!";
        //var storeScore = answerEl
        scoreEl.textContent = storeScore; 
    }else {
        feedbackEL.textContent = "INCORRECT"+ "some function for time to lose 5 seconds"; 
        timerEl = secondsLeft - 5;
    }
}
/*
answerEl.addEventListener("click", function(event){
// add variable for event "click and the target answer buttons container"
    var clickedAns = event.answerEl;
// not sure if i can use the information from the constructor function to do this.
    if (this.answers === this.correctAns) {
        storeScore.textContent.innerHTML ("CORRECT", storeScore + 5, "points!!");
        var storeScore = answerEl
        scoreEl.textContent(+5);
    }else {
        returnAns.textContent(innerHTML)("INCORRECT"+ "some function for time to lose 5 seconds")
        timerEl = secondsLeft - 5;
    }
    // return answer in the proper section
    clickedAns.storeScore;
});
*/

// TODO: Score Store: Write a formula to score and store user high score but was thinking maybe i can incorporate this in my construction function instead
// for (var i =0; i < storeScore; i++) {
// document.querySelectorAll(".bstyle")[i].addEventListener("click", function(){
// if (userInput === correctAns);
// //     // updateScore = userScore + 5
// scoreEl.textContent = "Score:" + userScore; 
// //     });


// TO-DO: 3: Loop Functions for the type of constructor equations I have if end questions game over
// Function to Loop questions 1,2,3 (constructor function once method developed if possible)
    // set onclick attribute to all available options looking at this type of option
    // for(i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)");




// }

// Timer Section 

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




// formula for exploring deductions from the timer with function subtractTime.addEventListener("click", function() {
//     if (count > 0) {
//       count--;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });

// To-do: Store score i believe local storage / log high score
