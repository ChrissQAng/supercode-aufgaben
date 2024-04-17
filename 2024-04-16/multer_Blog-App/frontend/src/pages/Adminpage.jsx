import { useState } from "react";
import "./Adminpage.css";

const Adminpage = () => {
  const [attachment, setAttachment] = useState();

  const addNewBlogItem = (event) => {
    event.preventDefault();
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
