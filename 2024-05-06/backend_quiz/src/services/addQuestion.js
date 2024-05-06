import { Question } from "../models/question.js";

export async function addQuestion(data) {
  const addedQuestion = await Question.create(data);
  return addedQuestion;
}
