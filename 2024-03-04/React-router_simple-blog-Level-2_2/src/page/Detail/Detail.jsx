import "./Detail.css";
const Detail = (props) => {
  console.log(props.detailcontent);
  return (
    <div className="detail">
      <img src="" alt="" />

      <h2>PH title</h2>
      <h3>PH published_date</h3>
      <p>PH description</p>
      <p>PH author</p>
    </div>
  );
};

export default Detail;
