import { QuestionService } from "../services/index.js";

async function createQuestionCtrl(req, res) {
  try {
    const newQuestion = req.body;
    const addedQuestion = await QuestionService.addQuestion(newQuestion);
    res.json(addedQuestion);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add new question" });
  }
}

export const QuestionController = {
  createQuestionCtrl,
};
