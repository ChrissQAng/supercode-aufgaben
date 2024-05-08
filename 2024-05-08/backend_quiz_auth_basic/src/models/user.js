import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String, default: "I have no bio added yet ;-)" },
    passwordHash: { type: String, required: true, trim: true }, // trim removes space at start and end of string
    passwordSalt: { type: String, required: true, trim: true },
  },
  { collection: "users", timestamps: true }
);

export const User = mongoose.model("User", userSchema);
