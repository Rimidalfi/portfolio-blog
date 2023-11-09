import BlogCardRT from "./BlogCardRT";

const Card = ({ title, intro, img }) => {
  return (
    <>
      <div className="blogcard-container">
      <div className="blogcard-title"><h1 className="blogCardTitle">{title}</h1></div>
      <div className="blogcard-intro"><BlogCardRT intro={intro} /></div>
      <div className="blogcard-imgcontainer">
      <img
        className="blogCardImg"
        src={img.fields.file.url}
        alt={img.description}
      />
      </div>
      </div>
    </>
  );
};
export default Card;

{
  /* <button className="blogCardButton">Zum Artikel</button> */
}
