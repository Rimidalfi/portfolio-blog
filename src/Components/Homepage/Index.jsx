import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from "react-router-dom";
import BlogFeed from "../BlogFeed/Index";

export default function Home() {
  const [header, setHeader] = useState(null);

  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;

  useEffect(() => {
    const client = contentful.createClient({
      space: "oz7f6gt77mhs",
      environment: "master",
      accessToken: "TvI3tvQ_YpazFu5isGpalaV2u-7RTmAEzxRTGqjFBqA",
    });

    client
      .getEntry("3RNUuPtoHE3ZdLUOMYmGCj")
      .then((data) => {
        console.log(data);
        setHeader([data]);
      })
      .catch(console.error);
  }, []);

  const headerBild = header?.map((item) => {
    return (
      <img
        className="header"
        key={item.sys.id}
        src={item.fields.headerBild.fields.file.url}
      />
    );
  });
  const headerTitel = header?.map((item) => {
    return <p key={item.sys.id}>{item.fields.homeTitel}</p>;
  });
  const subTitel = header?.map((item) => {
    return <p key={item.sys.id}>{item.fields.headerTitel}</p>;
  });

  return (
    <>
      <div className="headerContainer">
        <div className="titelContainer">
          <h1>{headerTitel}</h1>
          <p>{subTitel}</p>
        </div>
        <div>{headerBild}</div>
      </div>
      <div>
        <form action="">
          <label htmlFor="Search">Discover</label>
          <input type="text" />
        </form>
      </div>
      <BlogFeed />
    </>
  );
}
