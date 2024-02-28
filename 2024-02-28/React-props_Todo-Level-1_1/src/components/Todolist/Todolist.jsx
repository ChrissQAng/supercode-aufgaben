import Todoitem from "../Todoitem/Todoitem";
import "./Todolist.css";

const Todolist = () => {
  const arrayToDos = [
    { todo: "Buy Groceries" },
    { todo: "Send Email" },
    { todo: "Finish Assignment" },
    { todo: "Write Blog" },
    { todo: "Bake Cake" },
  ];
  return (
    // uebertrag={arrayToDos}
    <div className="todo-list">
      <h1>My Todos</h1>
      <ul>
        <Todoitem item={arrayToDos[0].todo} />
        <Todoitem item={arrayToDos[1].todo} />
        <Todoitem item={arrayToDos[2].todo} />
        <Todoitem item={arrayToDos[3].todo} />
        <Todoitem item={arrayToDos[4].todo} />
      </ul>
    </div>
  );
};

export default Todolist;
