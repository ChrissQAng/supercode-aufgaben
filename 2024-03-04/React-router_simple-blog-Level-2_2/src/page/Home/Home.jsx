import { Link } from "react-router-dom";
import "./Home.css";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
const Home = () => {
  return (
    <div className="home">
      <Header />

      <h1>Welcome to my simple Blog</h1>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Home;
