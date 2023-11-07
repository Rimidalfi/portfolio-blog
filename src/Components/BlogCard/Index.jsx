import { useState, useEffect } from "react";
import { createClient } from "contentful";
import Card from "./Card";
import { Link } from "react-router-dom";

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const BlogCard = ({ id }) => {
  const [blogcard, setBlogcard] = useState(null);
  useEffect(() => {
    //erstellen Client mit Zugangsdaten
    const client = createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });
    //API Fetch der spezifischen Daten
    client
      .getEntry(id)
      .then((entry) => {
        setBlogcard(entry.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {blogcard !== null ? (
        <Link to={`/blog/${id}`}>
          <Card
            title={blogcard.blogTitle}
            img={blogcard.blogImage}
            intro={blogcard.blogIntroduction}
          />
        </Link>
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};
export default BlogCard;
