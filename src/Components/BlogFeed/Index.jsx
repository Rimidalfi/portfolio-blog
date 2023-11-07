import { useState, useEffect } from "react";
import { createClient } from "contentful";

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const BlogFeed = () => {
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
        limit: 5,
      })
      .then((response) => {
        setblogpostlist(response.items);
        
      })
      .catch(console.error);
  }, []);

  console.log(blogpostlist)

const ListOfBlogposts = blogpostlist?.map((item) => {

       return (
          <>
            <div key={item.sys.id} className="blogCard">
            <div>
             <img src={item.fields.blogImage.fields.file.url} className="blogCardImg"/>
             </div>
             <br />
             <div>
             <h2>{item.fields.blogTitle}</h2>
             </div>
             <div className="blogCardButton">
             <button>Zum Blogbeitrag</button>
             </div>
             <br />
             </div>
        </>
    )})
   return (
    <>
        <div>{ListOfBlogposts}</div> 
    </>
   );
};

export default BlogFeed;