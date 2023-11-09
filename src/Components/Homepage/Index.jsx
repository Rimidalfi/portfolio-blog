import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from "react-router-dom";
import BlogFeed from "../BlogFeed/Index";

export default function Home() {
  const [header, setHeader] = useState(null);

  const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;

  useEffect(() => {
    const client = contentful.createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });

    client
      .getEntry("3RNUuPtoHE3ZdLUOMYmGCj")
      .then((data) => {
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
          <div className="headerContent">
            <h1>{headerTitel}</h1>
            <p>{subTitel}</p>
          </div>
        </div>
        <div>{headerBild}</div>
      </div>
      <BlogFeed blogCount={5} />
    </>
  );
}
