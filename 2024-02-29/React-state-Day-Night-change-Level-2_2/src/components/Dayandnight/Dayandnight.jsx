import { useState } from "react";
import "./Dayandnight.css";
const Dayandnight = () => {
  const [night, setNight] = useState(false);
  console.log(night);
  return (
    <div className={night ? "night" : "day"}>
      <h1>{night ? "Night" : "Day"}</h1>
      <button onClick={() => setNight((night) => !night)}>
        Change to Night
      </button>
    </div>
  );
};

export default Dayandnight;
