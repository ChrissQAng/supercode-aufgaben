import { QuizService } from "../services/index.js";

async function addQuizCtrl(req, res) {
  try {
    const newQuiz = req.body;
    const addedQuiz = await QuizService.addQuiz(newQuiz);
    res.status(201).json(addedQuiz);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add new quiz" });
  }
}

export const QuizController = {
  addQuizCtrl,
};
