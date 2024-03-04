import { Link } from "react-router-dom";
import "./Article.css";
const Article = (props) => {
  console.log(props.content);
  return (
    <article>
      <img src={props.content.img_url} alt="" />
      <h2>{props.content.title}</h2>
      <Link to="/detail" detailcontent={props.content}>
        Read more
      </Link>
    </article>
  );
};

export default Article;
