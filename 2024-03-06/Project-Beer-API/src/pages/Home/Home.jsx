import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
const Home = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((res) => res.json())
      .then((fetchData) => setRandom(fetchData))
      .catch((err) => console.error("Fehler auf der deteilseite", err));
  }, []);
  //   console.log(random);
  return (
    <>
      <div className="home">
        <img
          src="../../../public/4b3d9d897635e6bee2e3d13b091eae75.jpeg"
          alt="beers"
        />
        <div className="button">
          <Link to={"/allbeers"}>All Beers</Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          consectetur praesentium harum repellat placeat mollitia!
        </p>
        <img src="../../../public/beer2home.jpeg" alt="beers" />
        <div className="button">
          <Link to={`/allbeers/${random._id}`}>Random</Link>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, assumenda
          recusandae. Cum perspiciatis ex enim.
        </p>
      </div>
    </>
  );
};

export default Home;
