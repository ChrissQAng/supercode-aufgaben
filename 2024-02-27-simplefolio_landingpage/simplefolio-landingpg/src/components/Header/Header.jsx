import Icon from "../Icon/Icon";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav>
        <p className="js">JS.</p>
        <div className="links">
          <p>projects</p>
          <p>skills</p>
          <p>contact</p>
          <p>
            <Icon />
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
