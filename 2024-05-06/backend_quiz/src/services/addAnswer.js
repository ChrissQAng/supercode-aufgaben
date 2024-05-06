import { Answer } from "../models/answer.js";

export async function addAnswer(answerData) {
  const addedAnswer = await Answer.create(answerData);
  return addedAnswer;
}
