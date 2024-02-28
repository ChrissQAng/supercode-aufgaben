import "./Tile.css";
const Tile = (props) => {
  console.log(props);
  return (
    <div className="tile">
      <p>{props.content.title}</p>
      <p>{props.content.year}</p>
      <p>{props.content.director}</p>
      <p>{props.content.duration}</p>
      <p>{props.content.genre}</p>
    </div>
  );
};

export default Tile;
