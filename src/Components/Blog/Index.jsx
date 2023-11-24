import { useState, useEffect } from "react";
import BlogPost from "./BlogPost";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blogpost, setBlogpost] = useState(null);

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
        setBlogpost(data[0]);
        console.log("DATA FETCHED", data);
      })
      .catch((err) => console.log("DATA NOT FETCHED!", err.message));
  }, []);

  return (
    <>
      {blogpost !== null ? (
        <BlogPost
          title={blogpost.title}
          author={blogpost.author}
          date={blogpost.creationdate.split("T")[0]}
          img_url={blogpost.img_url}
          article={blogpost.article}
        />
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};

export default Blog;
