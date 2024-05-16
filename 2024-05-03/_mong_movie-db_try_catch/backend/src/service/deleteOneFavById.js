import { Favorites } from "../models/Favorites.js";

export function deleteOneFavById(favMovieId) {
  return Favorites.findOneAndDelete(favMovieId);
}

