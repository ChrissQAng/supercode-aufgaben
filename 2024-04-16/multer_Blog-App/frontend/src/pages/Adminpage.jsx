import { useState } from "react";
import "./Adminpage.css";

const Adminpage = ({ blog, setBlog }) => {
  const [attachment, setAttachment] = useState();

  const addNewBlogItem = (event) => {
    event.preventDefault();
    //  check if there is an attachment
    if (!attachment) return;

    // das verstehe ich NICHT !!!
    const formData = new FormData();
    formData.append("attachment", attachment, attachment.name);

    // fetch with method POST
    fetch("http://localhost:3003/api/v1/files/uploads", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const newBlogItem = {
          title: data.title,
          image: data.image,
          text: data.text,
        };
        return newBlogItem;
      })
      .then((newBlogItem) =>
        fetch("http://localhost:3003/api/v1/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBlogItem),
        })
      )
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Adminpage</h1>
      <div className="box">
        <h2>NEW POST</h2>
        <form>
          <input type="text" placeholder="title" />
          <input
            type="file"
            onChange={(e) => setAttachment(e.target.files[0])}
          />
          <input type="text" placeholder="text" />
          <button onClick={addNewBlogItem}>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default Adminpage;
