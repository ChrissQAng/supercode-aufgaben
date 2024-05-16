import express from "express";
import { favController } from "../controllers/favController.js";

export const favRouter = express
  .Router()
  .get("/", favController.getAllFavsCtrl)
  .post("/", favController.addNewFavCtrl)
  .delete("/:mID", favController.removeOneFavCtrl);
