import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="wrapper">
        <div className="three-elements">
          <button onClick={add}>+</button>
          <p>{counter}</p>
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Home;
