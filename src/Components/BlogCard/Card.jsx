const Card = ({ title, intro, img_url }) => {
  return (
    <>
      <div className="blogcard-container">
        <div className="blogcard-title">
          <h1 className="blogCardTitle">{title}</h1>
        </div>
        <div className="blogcard-intro">
          <p>{intro}</p>
        </div>
        <div className="blogcard-imgcontainer">
          <img className="blogCardImg" src={img_url} alt="" />
        </div>
      </div>
    </>
  );
};
export default Card;
