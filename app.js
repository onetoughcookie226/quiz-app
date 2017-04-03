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
