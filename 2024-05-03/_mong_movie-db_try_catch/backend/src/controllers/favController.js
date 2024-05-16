import { favData } from "../service/index.js";
import { Favorites } from "../models/Favorites.js";

function getAllFavsCtrl(req, res) {
  favData
    .showAllFavs()

    .then((data) => {
      res.json(data);
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all favs" });
    });
}
function addNewFavCtrl(req, res) {
  try {
    const newMovieId = req.body;
    const dataFav = favData.addNewFav(newMovieId);
    res.status(201).json({
      success: true,
      data: newMovieId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add movie to fav" });
  }
}
function removeOneFavCtrl(req, res) {
  const mID = req.params.mID;
  const favMovieId = Favorites.find({ movieId: mID }).then((favMovie) => {
    const id = favMovie[0]._id;
    // console.log("id----------", id);
    return id;
  });

  favData
    .deleteOneFavById(favMovieId)
    .then((deletedMovie) => res.json(deletedMovie || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not delete movie from fav" });
    });
}
export const favController = {
  getAllFavsCtrl,
  addNewFavCtrl,
  removeOneFavCtrl,
};
