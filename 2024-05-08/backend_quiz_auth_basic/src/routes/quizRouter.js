import express from "express";

import { QuizController } from "../controllers/quizController.js";
import { doBasicAuth } from "../middlewares/doBasicAuth.js";

export const quizRouter = express
  .Router()
  .post("/",
  doBasicAuth, QuizController.addQuizCtrl);
