import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <h2>My Life</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </div>
  );
};

export default Nav;
