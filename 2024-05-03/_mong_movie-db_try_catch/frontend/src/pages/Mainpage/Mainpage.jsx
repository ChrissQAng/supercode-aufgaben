import { useEffect, useState } from "react";
import "./Mainpage.css";
import { backendUrl } from "../../../api/api";
import Moviecard from "./Moviecard";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/v1/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="main">
      <h1>MovieMagicDatabase has it all. But you can still add to it.</h1>
      <h2>ALL MOVIES</h2>
      <Link to={"/fav"}>
        <h3>Favorites_page</h3>
      </Link>
      <section>
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie._id} />
        ))}
      </section>
    </main>
  );
};

export default Mainpage;