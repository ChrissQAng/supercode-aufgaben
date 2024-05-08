import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { collection: "quiz", timestamps: true }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
