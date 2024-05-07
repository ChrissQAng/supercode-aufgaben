import { Answer } from "../models/answer.js";
import { Question } from "../models/question.js";
import { User } from "../models/user.js";

export async function addAnswer(answerInfo) {
  // answerInfo = { questionId, userId, chosen: [], }
  // check if user already answered this question
  const previousAnswer = await Answer.findOne({
    userId: answerInfo.userId,
    questionId: answerInfo.questionId,
  });
  if (previousAnswer) throw new Error("User already answered this question");
  // Check if question exists
  const question = await Question.findById(answerInfo.questionId);
  if (!question) throw new Error("Question does not exist");
  // check if user exists
  const user = await User.findById(answerInfo.userId);
  if (!user) throw new Error("Question does not exist");
  // ============= !!! check if answer/s is/are correct and return a bolean (?)
  const correctAnswer =
    answerInfo.chosen.length === question.correctChoices.length &&
    answerInfo.chosen.every((choices) =>
      question.correctChoices.includes(choices)
    );
  // =========== !!! put "isCorrect-Bolean" to answerInfo and create Answer
  const answer = await Answer.create({
    ...answerInfo,
    isCorrect: correctAnswer,
  });
  return answer;
}
