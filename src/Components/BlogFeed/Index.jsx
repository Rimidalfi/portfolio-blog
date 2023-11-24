import { useState, useEffect } from "react";
import BlogCard from "../BlogCard/Index";

const BlogFeed = () => {
  const [blogpostlist, setblogpostlist] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8080/blog/");
      if (response.status !== 200) {
        throw new Error("CAN NOT FETCH DATA!");
      }
      return response.json();
    };
    fetchData()
      .then((data) => {
        setblogpostlist(data);
        console.log("DATA FETCHED", data);
      })
      .catch((err) => console.log("DATA NOT FETCHED!", err.message));
  }, []);

  const ListOfBlogposts = blogpostlist?.map((item) => {
    console.log(item.id);
    return (
      <div key={item.id}>
        <BlogCard id={item.id} />
      </div>
    );
  });
  return (
    <>
      <div>{ListOfBlogposts}</div>
    </>
  );
};

export default BlogFeed;
