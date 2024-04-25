import express from "express";
import morgan from "morgan";
import cors from "cors";
import { findAll } from "./db-access/moviesDAO.js";
import { findById } from "./db-access/moviesDAO.js";
import { updateOne } from "./db-access/moviesDAO.js";
import { createOne } from "./db-access/moviesDAO.js";
import { deleteOne } from "./db-access/moviesDAO.js";
import { ObjectId } from "mongodb";
import { createFav } from "./db-access/favoritesDAO.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// thunder-client test
app.get("/", (req, res) => res.json({ hello: "world" }));

// get all
app.get("/api/v1/movies", (req, res) => {
  findAll()
    .then((allMovies) => res.json(allMovies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
});

// get one by id
app.get("/api/v1/movies/:movId", (req, res) => {
  const movId = req.params.movId;
  findById(movId)
    .then((foundMovie) => res.json(foundMovie))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie", movId });
    });
});
// post
app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;
  createOne(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new movie" });
    });
});
// delete one
app.delete("/api/v1/movies/:mID", (req, res) => {
  const mID = req.params.mID;
  deleteOne(mID)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete one movie" });
    });
});

// patch
app.patch("/api/v1/movies/:mID", (req, res) => {
  const mID = req.params.mID;
  const updateInfo = req.body;
  updateOne(mID, updateInfo)
    .then((updatedMovie) => res.json(updatedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not modify movie" });
    });
});

const PORT = 3006;
app.listen(PORT, () => console.log("server ready at port", PORT));
