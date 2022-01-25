console.log("this page works!!")

// define variables for display on HTML using Queryselector
var timerEl = document.getElementById("timer");
var scoreEl = document.querySelector("score");
var questionEl = document.querySelector("getQuestion");
var answer1El = document.querySelector("getAnswer");

// tried creating construction function using objects easily to create more questions if needed
function QuestionFactory (questions, answers, correctAns){
    this.questions = questions;
    this.answers = answers;
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


// display questions and answers from constructor function
function showQuetions(index){
    const getQuestion = document.querySelector("getQuestion");

    //why are we using span? creating a new span and div tag for question and option and passing the value using array index
    // let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    // let option_tag = '<div class="option"><span>'+ questions[index].answers[0] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].answers[1] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].answers[2] +'</span></div>'
    // + '<div class="option"><span>'+ questions[index].answers[3] +'</span></div>';
    // getQuestion.innerHTML = que_tag; //adding new span tag inside que_tag
    // option_list.innerHTML = option_tag; //adding new div tag inside option_tag
    
    // const option = option_list.querySelectorAll(".option");

    // // set onclick attribute to all available options
    // for(i=0; i < option.length; i++){
    //     option[i].setAttribute("onclick", "optionSelected(this)");
    // }
}



// create event listener to listen for user click and check to see if it matches correctAns
// var numberofAnswers = document.querySelectorAll(".bstyle").length;
// var userInput =i;
// var userScore = 0;


// for (var i =0; i < numberofAnswers; i++) {
// document.querySelectorAll(".bstyle")[i].addEventListener("click", function(){
//      if (userInput === correctAns);
//     // updateScore = userScore + 5
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

// subtract time

// // subtractTime.addEventListener("click", function() {
//     if (count > 0) {
//       count--;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });


// deductions by 5 seconds if incorrect 
// document.getElementById(id).onclick = function(){code}

// score i believe local storage / log high score.
