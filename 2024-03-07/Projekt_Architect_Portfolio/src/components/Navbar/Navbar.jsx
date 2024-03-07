import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import Logo from "../../assets/svg/Logo";
import Dark from "../../assets/svg/Dark";
import Sun from "../../assets/svg/Sun";
import { useContext } from "react";
import { ThemeContext } from "../../context/Context";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeToggle = () => {
    setTheme((taco) => !taco);
  };
  return (
    <>
      <header>
        <Link to="/">
          <Logo />
        </Link>
        <nav>
          <NavLink to="/">MAIN</NavLink>
          <NavLink to="/">GALLERY</NavLink>
          <NavLink to="/">PROJECTS</NavLink>
          <NavLink to="/">CERTIFICATION</NavLink>
          <NavLink to="/">CONTACTS</NavLink>
        </nav>
        <div onClick={themeToggle}>{!theme ? <Dark /> : <Sun />}</div>
      </header>
    </>
  );
};

export default Navbar;
