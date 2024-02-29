import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [buttonstate, setButtonstate] = useState(false);
  console.log(buttonstate);

  return (
    <>
      <div className="box">
        <p>Why is React great?</p>
        <button onClick={() => setButtonstate((buttonstate) => !buttonstate)}>
          -
        </button>
      </div>
      <div className={buttonstate ? "expand-box" : ""}>
        {buttonstate && <p>Fast Learning Curve</p>}
      </div>
    </>
  );
};

export default Home;
