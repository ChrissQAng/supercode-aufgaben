import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-5 p-2">
      <h2 className="text-3xl">Home_H</h2>
      <div className="text-xl">
        <Link className="pr-10" to="/">
          Home
        </Link>
        <Link className="pr-10" to="/">
          About us
        </Link>
        <Link className="pr-10" to="/">
          Furniture
        </Link>
        <Link className="pr-10" to="/">
          Contact us
        </Link>
        <Link
          className="border-2 border-white border-solid  rounded-lg px-3 py-1 mr-10"
          to="/"
        >
          Log in
        </Link>
        <Link
          className="border-2 border-white border-solid rounded-lg bg-yellow-500 px-3 py-1"
          to="/Signup"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
