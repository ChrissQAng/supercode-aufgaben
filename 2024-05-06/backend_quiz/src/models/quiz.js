import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
  },
  { collection: "quiz", timestamps: false }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
