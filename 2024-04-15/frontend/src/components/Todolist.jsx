import Todoitem from "./Todoitem";

const Todolist = ({ toDos, setToDos }) => {
  console.log(toDos);
  return (
    <>
      {toDos.map((item) => (
        <Todoitem toDo={item} key={item.id} setToDos={setToDos} />
      ))}
    </>
  );
};

export default Todolist;
