import { useState, useEffect } from "react";
import { createClient } from "contentful";
import BlogPost from "./BlogPost";

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

const APITest = () => {
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
      .getEntry("KHX0ss4jw8yFseFtyk4Np")
      .then((entry) => {
        console.log(entry.fields);
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
        />
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};

export default APITest;
