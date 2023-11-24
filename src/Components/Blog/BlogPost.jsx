const BlogPost = ({ title, author, date, img_url, article }) => {
  return (
    <>
      <div className="blogEntry">
        <div className="blogHeader">
          <div className="blogTitle">
            <h1>{title}</h1>
          </div>
          <div className="blogAuthor">
            <p>{author}</p>
          </div>
          <div className="blogDate">
            <p>{date}</p>
          </div>
        </div>
        <img src={img_url} alt="" className="blogImage" />
        <p className="blogParagraph">{article}</p>;
      </div>
    </>
  );
};
export default BlogPost;
