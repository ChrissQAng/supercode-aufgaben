import express from "express";

import { UserController } from "../controllers/userController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const userRouter = express
  .Router()
  .post("/login", UserController.loginUserCtrl)
  .post("/register", UserController.postRegisterUserCtrl)
  .post("/veryfyEmail", UserController.postVerifyUserEmailCtrl)
  .post("/refresh-token", doJwtAuth, UserController.postRefreshToken);
