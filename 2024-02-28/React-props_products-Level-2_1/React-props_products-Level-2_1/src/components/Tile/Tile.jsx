import "./Tile.css";

const Tile = (props) => {
  return (
    <div className="tile">
      <img src={props.content.img} alt="" />
      <p>{props.content.product}</p>
      <p>{props.content.price}</p>
    </div>
  );
};

export default Tile;
