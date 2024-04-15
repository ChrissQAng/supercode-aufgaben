import { useEffect, useState } from "react";
import Todolist from "../components/Todolist";
import Addtodo from "../components/Addtodo";

const Homepage = () => {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3003/api/v1/todos")
      .then((res) => res.json())
      .then((data) => setToDos(data))
      .catch((err) => console.log("error at fetch all", err));
  }, []);

  return (
    <>
      <h1>TO-DO-LIST</h1>
      <Todolist toDos={toDos} setToDos={setToDos} />
      <h3>Add one to.do:</h3>
      <Addtodo setToDos={setToDos} />
    </>
  );
};

export default Homepage;
