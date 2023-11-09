import { useState, useEffect } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import * as contentful from "contentful";
import { Link } from "react-router-dom";

export default function Header() {
  const [navi, setNavi] = useState(null);

  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;

  // Peter API
  // const URL = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries/5Vc2P1WXzlVV4SjzIqQCFy?access_token=${VITE_ACCESS_TOKEN}&content_type=Navbar`

  useEffect(() => {
    const client = contentful.createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });

    client
      .getEntry("5Vc2P1WXzlVV4SjzIqQCFy")
      .then((data) => {
        setNavi([data]);
      })
      .catch(console.error);
  }, []);

  const logo = navi?.map((item) => {
    return (
      <Link to="/">
        <img
          className="logo"
          key={item.sys.id}
          src={item.fields.logo.fields.file.url}
        />
      </Link>
    );
  });

  const Header = navi?.map((item) => {
    return (
      <ul className="navbar" key={item.sys.id}>
        <Link to="/">
          {" "}
          <li>{item.fields.home}</li>{" "}
        </Link>
        <Link to="/blogfeed">
          <li>{item.fields.blog}</li>
        </Link>
        <Link to="/about">
          <li>{item.fields.aboutUs}</li>
        </Link>
      </ul>
    );
  });

  return (
    <>
      {navi !== null ? (
        <nav className="navbarall">
          <Logo logo={logo} />
          <Navigation navigation={Header} />
        </nav>
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
}
