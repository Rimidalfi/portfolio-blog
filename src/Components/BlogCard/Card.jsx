import BlogCardRT from "./BlogCardRT";

const Card = ({ title, intro, img }) => {
  return (
    <>
      <h1 className="blogCardTitle">{title}</h1>
      <BlogCardRT intro={intro} />
      <img
        className="blogCardImage"
        src={img.fields.file.url}
        alt={img.description}
      />
      <button className="blogCardButton">Zum Artikel</button>
    </>
  );
};
export default Card;
