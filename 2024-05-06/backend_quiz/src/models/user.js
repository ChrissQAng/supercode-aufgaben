import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },

  },
  { collection: "users", timestamps: false }
);

export const User = mongoose.model("User", userSchema);
