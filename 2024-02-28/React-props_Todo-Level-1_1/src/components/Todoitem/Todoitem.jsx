import "./Todoitem";

const Todoitem = (props) => {
  console.log(props);
  return <li>{props.item}</li>;
};

export default Todoitem;
