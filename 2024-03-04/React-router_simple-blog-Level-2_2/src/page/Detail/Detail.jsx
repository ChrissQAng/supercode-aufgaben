import "./Detail.css";
import { useLocation } from "react-router-dom";
const Detail = (props) => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  return (
    <div className="detail">
      <img src={from.img_url} alt="" />

      <h2>{from.title}</h2>
      <h3>{from.published_date}</h3>
      <p>{from.description}</p>
      <p>{from.author}</p>
    </div>
  );
};

export default Detail;
