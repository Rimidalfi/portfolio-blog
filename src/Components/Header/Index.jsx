import { useState, useEffect } from "react";

import * as contentful from "contentful";
import { Link } from "react-router-dom";

export default function Header() {
  const [navi, setNavi] = useState(null);
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
  const navBarID = "5Vc2P1WXzlVV4SjzIqQCFy";

  useEffect(() => {
    const client = contentful.createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });

    client
      .getEntry(navBarID)
      .then((data) => {
        console.log("NAvi", data);
        setNavi([data]);
      })
      .catch(console.error);
  }, []);

  const navBar = navi?.map((item) => {
    return (
      <nav key={item.sys.id} className="navbarall">
        <Link to="/">
          <div className="logoContainer">
            <img className="logo" src={item.fields.logo.fields.file.url} />
          </div>
        </Link>
        <ul className="navbar">
          <Link to="/">
            <li>{item.fields.home}</li>
          </Link>
          <Link to="/blogfeed">
            <li>{item.fields.blog}</li>
          </Link>
          <Link to="/about">
            <li>{item.fields.aboutUs}</li>
          </Link>
        </ul>
      </nav>
    );
  });

  return (
    <>
      {navi !== null ? (
        <div key={navi.map((item) => item.sys.id).join("-")}>{navBar}</div>
      ) : (
        <p>....Loading</p>
      )}
    </>
  );
}
