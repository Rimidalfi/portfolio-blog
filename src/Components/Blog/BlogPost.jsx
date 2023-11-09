import Blogarticle from "./Blogarticle";

const BlogPost = ({ title, author, date, img, blogJSON }) => {
  return (
    <>
    <div className="blogEntry">
    <div className="blogHeader">
      <div className="blogTitle">
      <h1>{title}</h1></div>
      <div className="blogAuthor">
        <p >Autor: {author}</p></div>
      <div className="blogDate">
        <p>Erstellt am: {date}</p>
      </div>
      </div>
      <img src={img.fields.file.url} alt={img.description}  className="blogImage"/>
      <Blogarticle blogJSON={blogJSON} />
      </div>
    </>
  );
};
export default BlogPost;
