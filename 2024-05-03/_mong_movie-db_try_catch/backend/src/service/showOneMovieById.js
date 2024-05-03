import { Movie } from "../models/Movies.js";

export function showOneMovieById(movId) {
  return Movie.findById(movId);
}
