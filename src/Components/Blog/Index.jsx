import { useState, useEffect } from "react";
import { createClient } from "contentful";
import BlogPost from "./BlogPost";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Head from "../Head"

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const Blog = () => {
  const { id } = useParams();
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
        // console.log("Blogpost:", blogPost);
        console.log("ENTRY:", entry);
        setBlogpost(entry.fields);
      })
      .catch(console.error);
  }, [id]);

  return (
    <>
     <Head>
        <title>{blogpost?.blogTitle}</title>
      </Head>
      
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
