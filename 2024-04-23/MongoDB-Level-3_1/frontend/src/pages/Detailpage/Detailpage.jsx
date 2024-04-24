import "./Detailpage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backendUrl } from "../../../api/api";

const Detailpage = () => {
  const [movie, setMovie] = useState({});

  const { mID } = useParams();

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/movies/${mID}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log(movie);
  return (
    <section className="detail">
      <h1>{movie.title}</h1>
      <p>
        {movie.year} | {movie.director}
      </p>
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 31">
          <rect
            id="Rectangle 18"
            width="38"
            height="38"
            rx="19"
            fill="#E9C46A"
          />
          <path
            id="Vector"
            d="M28.177 17.1173H21.5388V10.4759C21.5388 9.66091 20.8782 9 20.0637 9H18.5885C17.7739 9 17.1134 9.66091 17.1134 10.4759V17.1173H10.4752C9.66059 17.1173 9 17.7782 9 18.5932V20.069C9 20.884 9.66059 21.5449 10.4752 21.5449H17.1134V28.1863C17.1134 29.0013 17.7739 29.6622 18.5885 29.6622H20.0637C20.8782 29.6622 21.5388 29.0013 21.5388 28.1863V21.5449H28.177C28.9916 21.5449 29.6522 20.884 29.6522 20.069V18.5932C29.6522 17.7782 28.9916 17.1173 28.177 17.1173Z"
            fill="white"
          />
        </g>
      </svg>
      <a href="#">Add to Favorites</a>
      <a href="#">Edit Movie</a>
      <img
        src="https://ia.media-imdb.com/images/M/MV5BMTYzODMxNTUyNF5BMl5BanBnXkFtZTcwMTAwMzQyMQ@@._V1_SX300.jpg"
        alt={movie.title}
      />
      <div>
        {/* {movie.genres.map((genre) => (
          <p key={movie._id}>{genre}</p>
        ))} */}
      </div>
      <h1>Story</h1>
      <p>{movie.plot}</p>
      <p>{/* Rating: {movie.imdb.rating} Duration: {movie.runtime}min */}</p>
    </section>
  );
};

export default Detailpage;
