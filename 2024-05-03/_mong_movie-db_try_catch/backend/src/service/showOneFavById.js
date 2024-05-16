import { Favorites } from "../models/Favorites.js";

export function showOneMovieById(movId) {
  return Favorites.findById(movId);
}
