const Todoitem = ({ toDo, setToDos }) => {
  const deleteItem = () => {
    fetch(`http://localhost:3003/api/v1/todos/${toDo.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setToDos(data))
      .catch((err) => console.log(err));
    console.log(toDo.id);
  };
  return (
    <>
      <div className="list">
        <h2>{toDo.task}</h2>
        <p>{toDo.check ? "✅" : "❎"}</p>
        <button onClick={() => deleteItem()}>Delete</button>
      </div>
    </>
  );
};

export default Todoitem;
