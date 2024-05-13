import { UserLoginService, UserService } from "../services/index.js";

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

export async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await UserLoginService.loginUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not login" });
  }
}
export const UserController = {
  createUserCtrl,
  postLoginUserCtrl,
};
