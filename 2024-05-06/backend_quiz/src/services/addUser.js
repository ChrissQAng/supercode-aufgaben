import { User } from "../models/user.js";

export async function addUser(userData) {
  const addedUser = await User.create(userData);
  return addedUser;
}
