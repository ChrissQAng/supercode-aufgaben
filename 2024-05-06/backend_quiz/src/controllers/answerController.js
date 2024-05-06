import { addAnswer } from "../services/addAnswer.js";

async function addNewAnswerCtrl(req, res) {
  try {
    const newAnswer = req.body;
    const addedAnswer = await addAnswer(newAnswer);
    res.json(addedAnswer);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new answer" });
  }
}

export const AnswerController = {
  addNewAnswerCtrl,
};
