import { useEffect, useState } from "react";
import Moviecard from "../Mainpage/Moviecard";
import "./Favpage.css";
import { backendUrl } from "../../../api/api";

const Favpage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/favs`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="fav">
      <h1>Favorites</h1>
      {movies.map((movie) => (
        <Moviecard movie={movie} key={movie._id} />
      ))}
    </section>
  );
};

export default Favpage;
