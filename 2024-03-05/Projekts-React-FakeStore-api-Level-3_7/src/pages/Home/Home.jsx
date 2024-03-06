import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <h1>Wellcome to the shop</h1>
      <Link to="/shop">Shop</Link>
    </div>
  );
};

export default Home;
