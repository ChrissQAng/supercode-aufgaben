import { Quiz } from "../models/quiz.js";

export async function addQuiz(quizData) {
  const createdQuizz = await Quiz.create(quizData);
  return createdQuizz;
}
