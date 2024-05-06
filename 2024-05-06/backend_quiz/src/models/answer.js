import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    answerChoices: [{ type: String }],
    feedback: [{ type: Boolean }],
    questionId: { type: mongoose.Types.ObjectId },
    userId: { type: mongoose.Types.ObjectId },
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
