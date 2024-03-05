import { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
const Shop = () => {
  const [dataArray, setDataArray] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setDataArray(data))
      .catch((err) => console.error(err));
  }, []);
  // console.log(dataArray);

  return (
    <div className="wrapper">
      <h1>Welcome</h1>
      <div className="shop-items">
        {dataArray ? (
          dataArray.map((item, index) => (
            <div className="tile" key={index}>
              <img src={item.image} alt="" />
              <h2>{item.title}</h2>
              <p>{item.price} €</p>
              <Link to={`/shop/${item.id}`}>Show more</Link>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
