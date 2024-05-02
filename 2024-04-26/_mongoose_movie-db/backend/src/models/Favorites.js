import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema(
  {
    movieId: { type: String },
  },
  { collection: "favs", timestamps: false }
);

export const Favorites = mongoose.model("Favorites", favoritesSchema);
