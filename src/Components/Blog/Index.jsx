import { useState, useEffect } from "react";
import { createClient } from "contentful";
import BlogPost from "./BlogPost";
//Artikel: "KHX0ss4jw8yFseFtyk4Np", "6hrcPL5uujZTtr7oxQxkA2"
const entryID = "KHX0ss4jw8yFseFtyk4Np";
// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const Blog = () => {
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
      .getEntry(entryID)
      .then((entry) => {
        console.log(entry.fields.blogImage);
        setBlogpost(entry.fields);
      })
      .catch(console.error);
  }, []);
  console.log(
    blogpost !== null
      ? ("Artikel:", blogpost.blogArticle.content)
      : "Lade Blog Artikel Objekt"
  );
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
