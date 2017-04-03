/**
 * Created by vagrant on 4/3/17.
 */
//Question function

//Construction function that takes in text of the question, array of choices, and the correct answer

function Question (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Create a method on the question that checks if the users choice is the correct answer
Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
};


function Quiz (questions) {
    this.score= 0;
    this.questions = questions;
    this.currentQuestionIndex=0;

}

//Check against the
Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)){
        this.score++;
    }
//Move the currentQuestin Index forward by 1
    this.currentQuestionIndex++;
};

Question.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function(){
    return this.currentQuestionIndex >=this.question.length;
}

//Create questions
var questions = [
    new Question ("Who was the first president of the United States?", ["George Washington", "Thomas Jefferson"], "George Washington"),
    new Question("What is the answer to the ultimate Question of Life, the Universe and everything?", ["pi", "42"], "42")
    ];

//Create Quiz
var quiz= new Quiz (questions);

//Display Quiz
QuizUI.displayNext();