import { Movie } from "../models/Movies.js";

export function showAllMovies() {
  return Movie.find({});
}
