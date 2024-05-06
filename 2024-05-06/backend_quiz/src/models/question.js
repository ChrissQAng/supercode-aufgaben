import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: { type: String },

    quizId: { type: mongoose.Types.ObjectId },
  },
  { collection: "questions", timestamps: false }
);

export const Question = mongoose.model("Question", questionSchema);

// // {
// //   question :"Welche Farbe hat die Sonne?",
// //   choices: ["blau", "gelb", "rot", "grün"],
// //   correctCoices: ["gelb"]
// // }
