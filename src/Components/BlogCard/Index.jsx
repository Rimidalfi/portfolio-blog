import { useState, useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const BlogCard = ({ id }) => {
  const [blogcard, setBlogcard] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/blog/${id}`);
      if (response.status !== 200) {
        throw new Error("CAN NOT FETCH DATA!");
      }
      return response.json();
    };
    fetchData()
      .then((data) => {
        setBlogcard(data[0]);
        console.log("DATA FETCHED", data);
      })
      .catch((err) => console.log("DATA NOT FETCHED!", err.message));
  }, []);

  return (
    <>
      {blogcard !== null ? (
        <Link to={`/blog/${id}`}>
          <Card
            title={blogcard.title}
            img_url={blogcard.img_url}
            intro={blogcard.intro}
          />
        </Link>
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};
export default BlogCard;
