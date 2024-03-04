import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/home">Speisekarte</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
        <NavLink to="/openingtime">Öffnungszeiten</NavLink>
        <NavLink to="/gallery">Galerie</NavLink>
      </nav>
    </header>
  );
};

export default Header;
