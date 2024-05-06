import { addQuestion } from "../services/addQuestion.js";

async function createQuestionCtrl(req, res) {
  try {
    const newQuestion = req.body;
    const addedQuestion = await addQuestion(newQuestion);
    res.json(addedQuestion);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new question" });
  }
}

export const QuestionController = {
  createQuestionCtrl,
};
