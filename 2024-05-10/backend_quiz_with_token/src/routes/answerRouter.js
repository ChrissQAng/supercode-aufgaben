import express from "express";

import { AnswerController } from "../controllers/answerController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const answerRouter = express
  .Router()
  .post("/", doJwtAuth, AnswerController.addNewAnswerCtrl);
