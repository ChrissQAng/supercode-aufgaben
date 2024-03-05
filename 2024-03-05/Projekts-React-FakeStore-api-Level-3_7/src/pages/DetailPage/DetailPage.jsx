import { useEffect, useState } from "react";
import "./DetailPage.css";
import { Link, useParams } from "react-router-dom";
const DetailPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // >>> Daten fetchen

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((dataApi) => setData(dataApi))
      .catch((err) => console.error(err));
  }, []);

  // >>> link auslesen und mit Object_deconstr in Variable id speichern

  const { id } = useParams();

  // >>> filtern (mit .find), um das ensprechende Element
  // mit der ID in eine Variable (find) zu speichern

  useEffect(() => {
    const find = data.find((item) => Number(item.id) === Number(id));

    // >>> Variable find in State "FilteredData" speichern

    setFilteredData(find);
  }, [data]); // bei einem Update von data wird .find neu ausgeführt

  //   console.log(filteredData);
  // >>> das Objekt mit Turnary ins html schreiben

  return (
    <>
      <Link to="/">Back to Home</Link>
      {filteredData ? (
        <div className="detail">
          <p>{filteredData.category}</p>
          <img src={filteredData.image} alt={filteredData.title} />
          <p>{filteredData.title}</p>
          <p>{filteredData.description}</p>
          <p>{filteredData.price}</p>
        </div>
      ) : (
        <p>Laden ...</p>
      )}
    </>
  );
};

export default DetailPage;
