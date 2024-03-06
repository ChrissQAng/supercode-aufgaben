import { useEffect, useState } from "react";
import "./Allbeers.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const Allbeers = () => {
  const [megaData, setMegaData] = useState();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((data) => setMegaData(data))
      .catch((err) => console.error("Fetch Fehler", err));
  }, []);
  //   console.log(megaData);
  return (
    <div className="allbeers">
      {megaData ? (
        megaData.map((item, index) => (
          <section key={index}>
            <img src={item.image_url} alt={item.name} />
            <div className="info">
              <h1>{item.name}</h1>
              <h2>{item.tagline}</h2>
              <p>Created by: {item.name}</p>
              <Link to={`/allbeers/${item._id}`}>Details</Link>
            </div>
          </section>
        ))
      ) : (
        <p>Laden...</p>
      )}
      <Navbar />
    </div>
  );
};

export default Allbeers;
