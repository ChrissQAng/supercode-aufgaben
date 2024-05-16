import express from "express";
import { movieController } from "../controllers/movieController.js";

export const movieRouter = express
  .Router()
  .get("/", movieController.getAllMoviesCtrl)
  .get("/:movId", movieController.getOneMovieCtrl)
  .post("/", movieController.postOneMovieCtrl)
  .delete("/:mID", movieController.deleteOneMovieCtrl)
  .patch("/:mID", movieController.updateOneMovieCtrl);
