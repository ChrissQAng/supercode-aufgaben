import { useState } from "react";

const Addtodo = ({ setToDos }) => {
  const [task, setTask] = useState("");

  const addItem = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: task, // evtl HIER der Fehler?
      check: false,
    };
    console.log(newTodo);
    fetch("http://localhost:3003/api/v1/todos", {
      method: "POST",
      // headers: { Content_Type: "application/json" }, das war der FEHLER!!!!
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setToDos(data);
          // hier bin ich
        })
        .catch((err) => console.log(err))
    );
  };
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <p>{task}</p>
        <button onClick={addItem}>ADD</button>
      </form>
    </>
  );
};

export default Addtodo;
