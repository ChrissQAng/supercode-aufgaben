import { useState } from "react";
import "./Addpage.css";
import { backendUrl } from "../../../api/api";
import { json } from "react-router-dom";

const Addpage = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genres, setGenres] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");
  const [plot, setPlot] = useState("");

  const addMovie = (e) => {
    e.preventDefault();
    fetch(`${backendUrl}/api/v1/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        year,
        director,
        genres:[genres],
        rate,
        poster,
        plot,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <section className="add">
      <h3>MovieMagicDatabase has it all.</h3>
      <h3>But you can still add to it.</h3>
      <form>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL for movieposter"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <textarea
          placeholder="Description"
          rows={5}
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
        />
        <button onClick={addMovie}>Submit</button>
      </form>
    </section>
  );
};

export default Addpage;
