import { Favorites } from "../models/Favorites.js";

export function deleteOneFavById(mID) {
  return Favorites.findOneAndDelete({ movieId: mID });
}
