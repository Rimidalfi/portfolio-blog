import Blogarticle from "../Blog/Blogarticle";

const BlogPost = ({ title, author, date, img, blogJSON }) => {
  return (
    <>
      <h1 className="blogTitle">{title}</h1>
      <div>
        <p className="blogAuthor">{author}</p>
        <p className="blogDate">{date}</p>
      </div>
      <img src={img.fields.file.url} alt={img.description} />
      <Blogarticle blogJSON={blogJSON} />
    </>
  );
};
export default BlogPost;
