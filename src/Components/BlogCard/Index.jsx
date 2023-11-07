import { useState, useEffect } from "react";
import { createClient } from "contentful";
import Card from "./Card";

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
        console.log("ENTRY:", entry);
        setBlogcard(entry.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {blogcard !== null ? (
        <Card
          title={blogcard.blogTitle}
          img={blogcard.blogImage}
          intro={blogcard.blogIntroduction}
        />
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};
export default BlogCard;
