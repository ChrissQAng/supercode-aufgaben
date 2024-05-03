import { addNewFav } from "./addNewFav.js";
import { showAllFavs } from "./showAllFavs.js";
import { showAllMovies } from "./showAllMovies.js";
import { showOneMovieById } from "./showOneMovieById.js";
import { addNewMovie } from "./addNewMovie.js";
import { deleteOneMovie } from "./deleteOneMovieById.js";
import { updateOneMovie } from "./updateOneMovie.js";
import { deleteOneFavById } from "./deleteOneFavById.js";

export const movieData = {
  showAllMovies,
  showOneMovieById,
  addNewMovie,
  deleteOneMovie,
  updateOneMovie,
};
export const favData = {
  showAllFavs,
  addNewFav,
  deleteOneFavById,
};
