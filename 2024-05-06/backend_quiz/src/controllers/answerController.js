import { AnswerService } from "../services/index.js";

async function addNewAnswerCtrl(req, res) {
  try {
    const newAnswer = req.body;
    const addedAnswer = await AnswerService.addAnswer(newAnswer);
    res.json(addedAnswer);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not add new answer" });
  }
}

export const AnswerController = {
  addNewAnswerCtrl,
};
