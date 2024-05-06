import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    questionId: { type: mongoose.Types.ObjectId },
    text: { type: String },
    correct: { type: Boolean },
  },
  { collection: "answers", timestamps: false }
);

export const Answer = mongoose.model("Answer", answerSchema);

// {
//   answerChoices: ["grün"],
//   feedback:  false ,
//   questionId: 1,
//   userId: 10,
// },
