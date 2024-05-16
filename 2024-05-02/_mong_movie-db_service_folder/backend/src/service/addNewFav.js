import { Favorites } from "../models/Favorites.js";

export function addNewFav(newMovieId) {
  Favorites.find({}).then((favIds) => {
    if (favIds.findIndex((x) => x.movieId === newMovieId.movieId) === -1) {
      Favorites.create(newMovieId);
    }
    return {};
  });
}
