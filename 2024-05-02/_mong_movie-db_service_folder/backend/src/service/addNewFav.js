import { Favorites } from "../models/favorites";

export function addNewFav() {
    Favorites.find({}).then((favIds) => {
        if (favIds.findIndex((x) => x.movieId === newMovieId.movieId) === -1) {
          Favorites.create(newMovieId)
            .then((addedMovieId) => res.json(addedMovieId || {}))
            .catch((err) => {
              console.log(err);
              res.status(500).json({ err, message: "Could not add movie to fav" });
            });
        }
      });
}