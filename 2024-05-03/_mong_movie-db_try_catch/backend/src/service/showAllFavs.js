import { Favorites } from "../models/Favorites.js";
import { Movie } from "../models/Movies.js";

export function showAllFavs() {
  return Favorites.find({})
    .then((allFavIds) => allFavIds.map((x) => x.movieId))
    .then((movieIds) => movieIds.map((id) => Movie.findById(id)))
    .then((promises) => Promise.all(promises));
}
