import { Movie } from "../models/Movies.js";

export function updateOneMovie(mID, updateInfo) {
  return Movie.findByIdAndUpdate(mID, updateInfo, { new: true });
}
