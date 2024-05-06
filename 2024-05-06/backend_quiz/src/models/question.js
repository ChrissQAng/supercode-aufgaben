import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: { type: String },
    choices: [{ type: String }],
    correctCoices: [{ type: String }],
  },
  { collection: "questions", timestamps: false }
);

export const Question = mongoose.model("Question", questionSchema);

// // {
// //   question :"Welche Farbe hat die Sonne?",
// //   choices: ["blau", "gelb", "rot", "grün"],
// //   correctCoices: ["gelb"]
// // }
