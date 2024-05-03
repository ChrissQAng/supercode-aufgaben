import { Movie } from "../models/Movies.js";

export function deleteOneMovie(mID) {
  return Movie.findByIdAndDelete(mID);
}
