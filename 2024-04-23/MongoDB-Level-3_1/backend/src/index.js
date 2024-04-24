import express from "express";
import morgan from "morgan";
import cors from "cors";
import { findAll } from "./db-access/moviesDAO.js";
import { findById } from "./db-access/moviesDAO.js";
import { ObjectId } from "mongodb";
import { createFav } from "./db-access/favoritesDAO.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// thunder-client test
app.get("/", (req, res) => res.json({ hello: "world" }));

// get all
app.get("/api/v1/movies", (req, res) => {
  findAll()
    .then((allMovies) => res.json(allMovies))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find all movies" });
    });
});

// get one by id
app.get("/api/v1/movies/:movId", (req, res) => {
  const movId = req.params.movId;
  findById(movId)
    .then((foundMovie) => res.json(foundMovie))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not find movie", movId });
    });
});
const PORT = 3006;
app.listen(PORT, () => console.log("server ready at port", PORT));

// add fav to movies
// app.post("api/v1/movies:movId/fav", (req, res) => {
//   const favToggle = {
//     // favStatus: req.body.favStatus,
//     req.body._id,
//     favId: ObjectId.createFromHexString(req.params.favId),
//   };
//   createFav(newFavToggle).then(toggleFav);
// });
