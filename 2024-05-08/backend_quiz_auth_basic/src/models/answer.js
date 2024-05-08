import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    questionId: {
      type: mongoose.Types.ObjectId,
      ref: "questions",
      required: true,
    },
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },

    isCorrect: { type: Boolean, required: true },
    chosen: [{ type: String, required: true }],
  },
  { collection: "answers", timestamps: true }
);

export const Answer = mongoose.model("Answer", answerSchema);
