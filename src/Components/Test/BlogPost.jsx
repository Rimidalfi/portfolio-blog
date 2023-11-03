const BlogPost = ({ title, author, date }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{date}</p>
    </>
  );
};
export default BlogPost;
