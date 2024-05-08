import { UserService } from "../services/index.js";

async function createUserCtrl(req, res) {
  try {
    const newUser = req.body;
    const addedUser = await UserService.addUser(newUser);
    res.json(addedUser);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could register new user" });
  }
}

export const UserController = {
  createUserCtrl,
};
