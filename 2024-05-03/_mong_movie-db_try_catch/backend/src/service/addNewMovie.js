import { Movie } from "../models/Movies.js";

export function addNewMovie(newMovie) {
  return Movie.create(newMovie);
}
