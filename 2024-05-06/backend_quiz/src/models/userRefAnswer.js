import mongoose from "mongoose";

const userRefAnswerSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId },
    answerId: { type: mongoose.Types.ObjectId },
  },
  { collection: "userRefAnswer", timestamps: false }
);

export const UserRefAnswer = mongoose.model(
  "UserRefAnswer",
  userRefAnswerSchema
);

// {
//   answerChoices: ["grün"],
//   feedback:  false ,
//   questionId: 1,
//   userId: 10,
// },
