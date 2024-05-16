import { User } from "../models/user.js";
import { generateRandomSalt, hash } from "../utils/hash.js";

export async function addUser({ firstName, lastName, email, password }) {
  const foundUserWithEmail = await User.findOne({ email });
  if (foundUserWithEmail)
    throw new Error("user with this email already exists");

  const passwordSalt = generateRandomSalt();
  const passwordHash = hash(`${password}${passwordSalt}`);

  const user = await User.create({
    firstName,
    lastName,
    email,
    passwordHash,
    passwordSalt,
  });
  return userToView(user);
}
function userToView(user) {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    bio: user.bio,
  };
}
