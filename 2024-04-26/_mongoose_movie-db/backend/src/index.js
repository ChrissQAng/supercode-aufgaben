import express from "express";
import morgan from "morgan";
import cors from "cors";

import { ObjectId } from "mongodb";
import { connectToDatabase } from "./models/index.js";
import { Movie } from "./models/Movies.js";
import { Favorites } from "./models/favorites.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// thunder-client test
app.get("/", (req, res) => res.json({ hello: "world" }));

// COLLECTION movieDetails
// get all
app.get("/api/v1/movies", (req, res) => {
  Movie.find({})
    .then((allMovies) => res.json(allMovies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
});

// get one by id
app.get("/api/v1/movies/:movId", (req, res) => {
  const movId = req.params.movId;
  Movie.findById(movId)
    .then((foundMovie) => res.json(foundMovie))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie", movId });
    });
});
// post
app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;
  Movie.create(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new movie" });
    });
});
// delete one
app.delete("/api/v1/movies/:mID", (req, res) => {
  const mID = req.params.mID;
  Movie.findByIdAndDelete(mID)
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
  Movie.findByIdAndUpdate(mID, updateInfo, { new: true })
    .then((updatedMovie) => res.json(updatedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not modify movie" });
    });
});

// COLLECTION favs

// get all favs
app.get("/api/v1/favs", (req, res) => {
  Favorites.find({})
    // .then((data) => console.log(data))
    .then((allFavIds) => allFavIds.map((x) => x.movieId))
    .then((movieIds) => movieIds.map((id) => Movie.findById(id)))
    .then((promises) => Promise.all(promises).then((data) => res.json(data)))

    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all favs" });
    });
});

app.post("/api/v1/favs", (req, res) => {
  const newMovieId = req.body;
  Favorites.find({}).then((favIds) => {
    if (favIds.findIndex((x) => x.movieId === newMovieId.movieId) === -1) {
      Favorites.create(newMovieId)
        .then((addedMovieId) => res.json(addedMovieId || {}))
        .catch((err) => {
          console.log(err);
          res.status(500).json({ err, message: "Could not add movie to fav" });
        });
    }
  });
});
// delete one fav
app.delete("/api/v1/favs/:mID", (req, res) => {
  const mID = req.params.mID;
  Favorites.findByIdAndDelete(mID)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie from fav" });
    });
});

connectToDatabase()
  .then(() => {
    const PORT = 3007;
    app.listen(PORT, () => console.log("server ready at port", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
