import express from "express";
import { UserController } from "../controllers/userController.js";

export const userRouter = express
  .Router()
  .post("/", UserController.createUserCtrl);
