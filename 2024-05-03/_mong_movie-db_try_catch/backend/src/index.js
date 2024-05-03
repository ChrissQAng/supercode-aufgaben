import express from "express";
import morgan from "morgan";
import cors from "cors";

import { connectToDatabase } from "./models/index.js";
import { Movie } from "./models/Movies.js";
import { Favorites } from "./models/Favorites.js";

import { movieData } from "./service/index.js";
import { favData } from "./service/index.js";
import { addNewMovie } from "./service/addNewMovie.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// thunder-client test
app.get("/", (req, res) => res.json({ hello: "world" }));

// COLLECTION movieDetails
// get all
app.get("/api/v1/movies", (req, res) => {
  movieData
    .showAllMovies()
    .then((allMovies) => res.json(allMovies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
});

// get one by id
app.get("/api/v1/movies/:movId", (req, res) => {
  const movId = req.params.movId;
  movieData
    .showOneMovieById(movId)
    .then((foundMovie) => res.json(foundMovie))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie", movId });
    });
});
// post
app.post("/api/v1/movies", (req, res) => {
  const newMovie = req.body;
  movieData
    .addNewMovie(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new movie" });
    });
});
// delete one
app.delete("/api/v1/movies/:mID", (req, res) => {
  const mID = req.params.mID;
  movieData
    .deleteOneMovie(mID)
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
  movieData
    .updateOneMovie(mID, updateInfo)
    .then((updatedMovie) => res.json(updatedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not modify movie" });
    });
});

// COLLECTION favs

// get all favs
app.get("/api/v1/favs", (req, res) => {
  favData
    .showAllFavs()

    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all favs" });
    });
});

app.post("/api/v1/favs", (req, res) => {
  const newMovieId = req.body;
  try {
    favData.addNewFav(newMovieId);
    res.json({});
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add movie to fav" });
  }
});

// delete one fav
app.delete("/api/v1/favs/:mID", (req, res) => {
  const mID = req.params.mID;
  favData
    .deleteOneFavById(mID)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie from fav" });
    });
});

connectToDatabase()
  .then(() => {
    const PORT = 3008;
    app.listen(PORT, () => console.log("server ready at port", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
