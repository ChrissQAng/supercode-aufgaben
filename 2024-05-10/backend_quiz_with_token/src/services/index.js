import { addAnswer } from "./addAnswer.js";
import { addQuestion } from "./addQuestion.js";
import { addQuiz } from "./addQuiz.js";
import { addUser } from "./addUser.js";
import { loginUser } from "./loginUser.js";

export const AnswerService = { addAnswer };
export const QuestionService = { addQuestion };
export const QuizService = { addQuiz };
export const UserService = { addUser };
export const UserLoginService = { loginUser };
