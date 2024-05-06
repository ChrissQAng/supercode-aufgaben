import { Answer } from "../models/answer.js";
import { Question } from "../models/question.js";

export async function addAnswer(answerData) {
  const addedAnswer = await Answer.create(answerData);
  return addedAnswer;
}
