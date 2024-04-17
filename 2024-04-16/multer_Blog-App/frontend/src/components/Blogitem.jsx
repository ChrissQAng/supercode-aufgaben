const Blogitem = ({ blog, setBlog }) => {
  // console.log("blogitem", blog.image);
  return (
    <>
      <h2>{blog.title}</h2>
      <img src={"http://localhost:3003/" + blog.image} alt="" />

      <p>{blog.text}</p>
    </>
  );
};

export default Blogitem;
