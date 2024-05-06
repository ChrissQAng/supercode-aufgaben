import { addQuiz } from "../services/addQuiz.js";

async function addQuizCtrl(req, res) {
  try {
    const newQuiz = req.body;
    const addedQuiz = await addQuiz(newQuiz);
    res.json(addedQuiz);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new quiz" });
  }
}

export const QuizController = {
  addQuizCtrl,
};
