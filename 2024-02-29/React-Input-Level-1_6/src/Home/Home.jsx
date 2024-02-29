import { useState } from "react";
import "./Home.css";
const Home = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const deleteForm = () => {
    setFirstname("");
    setSurname("");
    setEmail("");
  };
  return (
    <div className="wrapper">
      <input
        placeholder="first name"
        onChange={(event) => setFirstname(event.target.value)}
        type="text"
        value={firstname}
      />
      <input
        onChange={(event) => setSurname(event.target.value)}
        placeholder="surname"
        type="text"
        value={surname}
      />
      <input
        placeholder="email"
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        value={email}
      />
      <br />
      <p>Vorname:{firstname}</p>
      <p>Nachname:{surname}</p>
      <p>Email:{email}</p>
      <button onClick={deleteForm}>DELETE</button>
    </div>
  );
};

export default Home;
