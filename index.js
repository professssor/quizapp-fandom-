var readlineSync = require("readline-sync");
// to keep track of the score
var scoreCounter = 0;

// object which provides detail of high score
var highScores = [
  {
    name: "san",
    score: 3,
  },

  {
    name: "messi",
    score: 2,
  },
];

// list of questions to ask
var questions = [
  {
    question: "Which country does Ronaldo belong to? ",
    answer: "portugal",
  },
  {
    question: "He is a legend of which club  ??",
    answer: "realmadrid",
  },
  {
    question: "In which club is he currntly playing ?? ",
    answer: "manchesterunited",
  },
];

// ********FUNCTIONS*********

function intro() {
  var username = readlineSync.question("what is your name ");
  console.log("Welcome " + username.toUpperCase());
  console.log("Do you know Cristiano Ronaldo,  let's test you ??");
  // will show the questions if only s key is pressed
  let specialKey = readlineSync.question("Press S key to start  ");
  if (specialKey === "s") {
    game();
  } else {
    return null;
  }
}

// QNA
function sawalJawab(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns === answer) {
    console.log("🤜🤜absolutely right ");
    scoreCounter = scoreCounter + 1;
  } else {
    console.log("👎👎you are wrong");
  }
  console.log("your score is ", scoreCounter);
}

// will loop through the questions array and pass them to the functoin sawalJawab as arguments
function game() {
  for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    sawalJawab(currentQuestion.question, currentQuestion.answer);
  }
}

// will will different remarks based on your show and will also show the high score counter
function showScores() {
  if (scoreCounter === 0 || scoreCounter === 1) {
    console.log("dont call yourself a ronaldo fan");
  } else if (scoreCounter === 2) {
    console.log("good job");
  } else if (scoreCounter === 3) {
    console.log("you are the goat!! A true ronaldo fan✌️✌️");
    console.log("here are the high scores, do try to beat them");
  }

  highScores.map((score) => console.log(score.name, ":", score.score));
}

// function invocation
intro();
showScores();
