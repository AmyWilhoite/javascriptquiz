console.log("this page works!!")

// what variables for questions 
var question;
var answer;
var questionArray;


question = ["An API interacts with programs in:", "Which of the following is a string?", "Which of the following is a loop:"];
console.log(question);
var elQuest = document.getElementById("question");
elQuest.textContent = question[0];

answer1 = ["browsers", "scripts", "platforms", "all of the above"];
console.log(answer1);
console.log (answer1.length);

function questionDisplay (){
   var q1ans = document.getElementsByTagName ('li');
   q1ans.textContent = "answer1";
   console.log(q1ans)
   return
   
}



// get elements by class (find)


// create variables for answers





// define questions,  answers and correct answers 
// use array for answers to questions
// var ansQuestion1 = ["browsers", "scripts", "platforms", "all of the above"];
// getElementById ("question1").innerHTML = question1.toString();
// var userAns = 

// if (ansQuestion1.includes(userAns)){
   // display ("correct!");
// else display ("sorry, you are incorrect");
// }

// score (return value) 

/* 1. An API interacts with programs in: browsers, scripts, platforms, all of the above
   2. Which of the following is a string? cat, 25, true or false, Null
   3. Which of the following is a loop: While, Click, Return, All of the above */

// countdown timer 

// define answers

// Score

// log score & initials