import { Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
  return (
    <article>
      <Link to={`/movies/${movie._id}`}>
        <img
          src="https://ia.media-imdb.com/images/M/MV5BMTYzODMxNTUyNF5BMl5BanBnXkFtZTcwMTAwMzQyMQ@@._V1_SX300.jpg"
          alt={movie.title}
        />
      </Link>
      <h3>{movie.title}</h3>
      <h3>{movie.director}</h3>
    </article>
  );
};

export default Moviecard;
