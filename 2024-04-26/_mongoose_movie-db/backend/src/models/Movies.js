import mongoose from "mongoose";
const moviesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number },
    rated: { type: String },
    runtime: { type: Number },
    countries: [{ type: String }],
    genres: [{ type: String }],
    director: { type: String },
    writers: [{ type: String }],
    actors: [{ type: String }],
    plot: { type: String },
    poster: { type: String, default: "placeholder URL" },
    imdb: {
      id: { type: String },
      rating: { type: String },
      votes: { type: Number },
    },
    tomato: {
      meter: { type: Number },
      image: { type: String },
      rating: { type: String },
      reviews: { type: Number },
      fresh: { type: Number },
      consensus: { type: String },
      userMeter: { type: Number },
      userRating: { type: Number },
      userReviews: { type: Number },
    },
    metacritic: { type: String },
    awards: {
      wins: { type: Number },
      nominations: { type: Number },
      text: { type: String },
    },
    type: { type: String },
  },
  { collection: "movieDetails", timestamps: false }
);

export const Movie = mongoose.model("Movie", moviesSchema);
// start to write this
// const moviesSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   year: { type: Number, required: true },
//   rated: { type: String, required: false },
//   runtime: {type: Number},
//   countries: [{type: String}],
//   genres: ["Western"],
//   director: "Sergio Leone",
//   writers: [
//     "Sergio Donati",
//     "Sergio Leone",
//     "Dario Argento",
//     "Bernardo Bertolucci",
//     "Sergio Leone",
//   ],
//   actors: [
//     "Claudia Cardinale",
//     "Henry Fonda",
//     "Jason Robards",
//     "Charles Bronson",
//   ],
//   plot: "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
//   poster:
//     "http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg",
//   imdb: {
//     id: "tt0064116",
//     rating: 8.6,
//     votes: 201283,
//   },
//   tomato: {
//     meter: 98,
//     image: "certified",
//     rating: 9,
//     reviews: 54,
//     fresh: 53,
//     consensus:
//       "A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.",
//     userMeter: 95,
//     userRating: 4.3,
//     userReviews: 64006,
//   },
//   metacritic: 80,
//   awards: {
//     wins: 4,
//     nominations: 5,
//     text: "4 wins & 5 nominations.",
//   },
//   type: "movie",
// });

// ORIGINAL json:
// {
//     "_id": "66265043c982d5ea71c020cc",
//     "title": "Once Upon a Time in the West",
//     "year": 1968,
//     "rated": "PG-13",
//     "runtime": 175,
//     "countries": [
//       "Italy",
//       "USA",
//       "Spain"
//     ],
//     "genres": [
//       "Western"
//     ],
//     "director": "Sergio Leone",
//     "writers": [
//       "Sergio Donati",
//       "Sergio Leone",
//       "Dario Argento",
//       "Bernardo Bertolucci",
//       "Sergio Leone"
//     ],
//     "actors": [
//       "Claudia Cardinale",
//       "Henry Fonda",
//       "Jason Robards",
//       "Charles Bronson"
//     ],
//     "plot": "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
//     "poster": "http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg",
//     "imdb": {
//       "id": "tt0064116",
//       "rating": 8.6,
//       "votes": 201283
//     },
//     "tomato": {
//       "meter": 98,
//       "image": "certified",
//       "rating": 9,
//       "reviews": 54,
//       "fresh": 53,
//       "consensus": "A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.",
//       "userMeter": 95,
//       "userRating": 4.3,
//       "userReviews": 64006
//     },
//     "metacritic": 80,
//     "awards": {
//       "wins": 4,
//       "nominations": 5,
//       "text": "4 wins & 5 nominations."
//     },
//     "type": "movie"
//   }
