import express from "express";

import { QuizController } from "../controllers/quizController.js";

export const quizRouter = express
  .Router()
  .post("/", QuizController.addQuizCtrl);
