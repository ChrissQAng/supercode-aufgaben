import { Question } from "../models/question.js";
import { Quiz } from "../models/quiz.js";

export async function addQuestion(data) {
  //    check if quiz exists
  const quiz = await Quiz.findById(data.quizId);
  if (!quiz) throw new Error("Quiz referred to question doesn´t exist");
  //    check if question has 2 answers at least
  const minTwoChoices = data.choices.length;
  if (minTwoChoices < 2) throw new Error("we need at least 2 answers");
  //    check if one choice at least is correct
  const atLeastOneCorrectChoice = data.correctChoices.length;
  if (atLeastOneCorrectChoice < 1)
    throw new Error("One correct answer needed at least");
  //    check if correct answer is included in all answers
  const correctAnswerIncludedInAll = data.correctChoices.every(
    (correctAnswer) => data.choices.includes(correctAnswer)
  );
  if (!correctAnswerIncludedInAll)
    throw new Error("correct answer not included in all choices");

  // if all these checks are passed, create new question
  const addedQuestion = await Question.create(data);
  return addedQuestion;
}
