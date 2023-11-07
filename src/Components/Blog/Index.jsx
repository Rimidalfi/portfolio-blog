import { useState, useEffect } from "react";
import { createClient } from "contentful";
import BlogPost from "./BlogPost";

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const Blog = ({ id }) => {
  const [blogpost, setBlogpost] = useState(null);
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
        setBlogpost(entry.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {blogpost !== null ? (
        <BlogPost
          title={blogpost.blogTitle}
          author={blogpost.blogAuthor}
          date={blogpost.blogCreationDate}
          img={blogpost.blogImage}
          blogJSON={blogpost.blogArticle}
        />
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};

export default Blog;
