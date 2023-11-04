import Blogarticle from "../Blog/Blogarticle";

const BlogPost = ({ title, author, date, img, blogJSON }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{date}</p>
      <img src={img} alt="" />
      <Blogarticle blogJSON={blogJSON} />
    </>
  );
};
export default BlogPost;
