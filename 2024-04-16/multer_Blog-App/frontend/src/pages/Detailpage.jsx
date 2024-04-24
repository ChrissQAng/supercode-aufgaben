import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detailpage = () => {
  const { id } = useParams();
  console.log(id);
  const [blogEntry, setBlogEntry] = useState();

  useEffect(() => {
    fetch("http://localhost:3003/api/v1/blog/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((fetchEntry) => setBlogEntry(fetchEntry))
      .catch((err) => console.log("fetch error detailpage", err));
  }, []);
  console.log(blogEntry);
  return (
    <>
      <h1>Detailpage</h1>

      <h2>{blogEntry.title}</h2>
      <img src={"http://localhost:3003/" + blogEntry.image} alt="" />
      <p>{blogEntry.text}</p>
    </>
  );
};

export default Detailpage;
