import { movieData } from "../service/index.js";

function getAllMoviesCtrl(req, res) {
  movieData
    .showAllMovies()
    .then((allMovies) => res.json(allMovies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
}

function getOneMovieCtrl(req, res) {
  const movId = req.params.movId;
  movieData
    .showOneMovieById(movId)
    .then((foundMovie) => res.json(foundMovie))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie", movId });
    });
}
function postOneMovieCtrl(req, res) {
  const newMovie = req.body;
  movieData
    .addNewMovie(newMovie)
    .then((addedMovie) => res.json(addedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new movie" });
    });
}
function deleteOneMovieCtrl(req, res) {
  const mID = req.params.mID;
  movieData
    .deleteOneMovie(mID)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete one movie" });
    });
}
function updateOneMovieCtrl(req, res) {
  const mID = req.params.mID;
  const updateInfo = req.body;
  movieData
    .updateOneMovie(mID, updateInfo)
    .then((updatedMovie) => res.json(updatedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not modify movie" });
    });
}

export const movieController = {
  getAllMoviesCtrl,
  getOneMovieCtrl,
  postOneMovieCtrl,
  deleteOneMovieCtrl,
  updateOneMovieCtrl,
};
