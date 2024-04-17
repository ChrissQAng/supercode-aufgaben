import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blogitem from "../components/Blogitem";

const Homepage = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/blog")
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.log(err));
  }, []);
  // console.log("blog Daten", blog);
  return (
    <>
      <h1>Homepage 2</h1>
      <Link to="/admin">Admin Page</Link>

      {blog.map((blogitem) => {
        return <Blogitem blog={blogitem} setBlog={setBlog} key={blogitem.id} />;
      })}
    </>
  );
};

export default Homepage;
