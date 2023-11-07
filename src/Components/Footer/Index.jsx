import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { createClient } from "contentful";

const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const navBarID = "5Vc2P1WXzlVV4SjzIqQCFy";
export default function Footer() {
  const [navbar, setNavbar] = useState(null);
  useEffect(() => {
    //erstellen Client mit Zugangsdaten
    const client = createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });
    //API Fetch der spezifischen Daten
    client
      .getEntry(navBarID)
      .then((entry) => {
        // console.log("API RESPOND", entry.fields.logo.fields.file.url);
        setNavbar(entry.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerLogo">
            <NavLink to="/home">
              <img
                src={navbar?.logo.fields.file.url || "loading"}
                alt={navbar?.logo.fields.title || "loading"}
              />
            </NavLink>
          </div>
          <div className="footerLinks">
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/about">Autoren</NavLink>
              </li>
              <li>
                <NavLink to="/imprint">Impressum</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerInfo">
          <p>&copy; 2023 BRW Portfolio Blog. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </>
  );
}
