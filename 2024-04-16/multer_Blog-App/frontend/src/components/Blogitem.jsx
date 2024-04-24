import { Link } from "react-router-dom";
import "./Blogitem.css";
import Deletebutton from "./Deletebutton";
const Blogitem = ({ blog, setBlog }) => {
  // console.log("blogitem", blog.image);

  return (
    <>
      <Link to={"/detailpage/" + blog.id}>
        <h2>{blog.title}</h2>
        <img src={"http://localhost:3003/" + blog.image} alt="" />

        <p>{blog.text}</p>
      </Link>
      <Deletebutton />
    </>
  );
};

export default Blogitem;
