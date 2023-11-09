import { useState, useEffect } from "react";
import { createClient } from "contentful";
import BlogCard from "../BlogCard/Index";

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const BlogFeed = ({ blogCount }) => {
  const [blogpostlist, setblogpostlist] = useState([]);
  useEffect(() => {
    //erstellen Client mit Zugangsdaten
    const client = createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });
    //API Fetch der spezifischen Daten
    client
      .getEntries({
        content_type: "blogPost",
        limit: blogCount,
      })
      .then((response) => {
        setblogpostlist(response.items);
        const sortedData = response.items.sort((a, b) => new Date(a.fields.blogCreationDate) - new Date(b.fields.blogCreationDate));
        console.log(sortedData);
      })
      .catch(console.error);
  }, []);
  const ListOfBlogposts = blogpostlist?.map((item) => {
    return (
      <div key={item.sys.id}>
        <BlogCard id={item.sys.id} />
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
