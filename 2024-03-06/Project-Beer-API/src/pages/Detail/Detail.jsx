import { useEffect, useState } from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const Detail = () => {
  const [data, setData] = useState([]);
  const [filterdData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData))
      .catch((err) => console.error("Fehler auf der deteilseite", err));
  }, []);

  const { _id } = useParams();

  //   console.log(_id);

  useEffect(() => {
    const find = data.find((item) => String(item._id) === String(_id));
    setFilterData(find); // wir schreiben es in unsere state
  }, [data]);
  return (
    <>
      {filterdData ? (
        <div className="detail">
          <img src={filterdData.image_url} alt={filterdData.name} />
          <div className="detail-info">
            <h1>{filterdData.name}</h1>
            <h2>{filterdData.tagline}</h2>
            <div className="date-level">
              <section>
                <p>First brewed:</p>
                <p>Attenuation Level:</p>
              </section>
              <section>
                <p>{filterdData.first_brewed}</p>
                <p>{filterdData.attenuation_level}</p>
              </section>
            </div>
            <p>{filterdData.description}</p>

            <Link to={"/allbeers"}>
              <svg
                width="57"
                height="57"
                viewBox="0 0 57 57"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="28.5" cy="28.5" r="28.5" fill="#FFCA41" />
                <path
                  d="M31.993 45.3878L30.011 47.3704C29.1719 48.2099 27.8149 48.2099 26.9846 47.3704L9.62939 30.0182C8.7902 29.1787 8.7902 27.8213 9.62939 26.9907L26.9846 9.62961C27.8238 8.79013 29.1808 8.79013 30.011 9.62961L31.993 11.6122C32.8411 12.4606 32.8232 13.8449 31.9573 14.6754L21.1995 24.9278H46.8574C48.0448 24.9278 49 25.8833 49 27.0711V29.9289C49 31.1167 48.0448 32.0722 46.8574 32.0722H21.1995L31.9573 42.3246C32.8322 43.1551 32.85 44.5394 31.993 45.3878Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <p>Laden...</p>
      )}
      <Navbar />
    </>
  );
};

export default Detail;
