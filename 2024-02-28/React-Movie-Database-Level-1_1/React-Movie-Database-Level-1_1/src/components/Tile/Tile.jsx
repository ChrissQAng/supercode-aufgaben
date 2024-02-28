import "./Tile.css";
const Tile = (props) => {
  return (
    <div className="tile">
      <p className="css-title">{props.content.title}</p>
      <p>{props.content.year}</p>
      <p>{props.content.director}</p>
      <p>{props.content.duration}</p>
      <p>{props.content.rate}</p>
      <div className="wrapper-genre">
        {props.content.genre.map((genre, index) => (
          <p className="css-genre" key={index}>
            {genre}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tile;
