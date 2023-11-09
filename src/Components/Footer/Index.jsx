import { Link } from "react-router-dom";
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
        setNavbar(entry.fields);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <footer>
        <div className="footerContainer">
        <div className="footerLinks">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blogfeed">Blog</Link>
              </li>
              <li>
                <Link to="/about">Autoren</Link>
              </li>
              <li>
                <Link to="/imprint">Impressum</Link>
              </li>
            </ul>
          </div>
          <div className="footerLogo">
            <Link to="/">
              <img
                src={navbar?.logo.fields.file.url}
                alt={navbar?.logo.fields.title}
              />
            </Link>
          </div>
        
        <div className="footerInfo">
          <p>&copy; 2023 BRW KI Blog. Alle Rechte vorbehalten.</p>
        </div>
        </div>
      </footer>
    </>
  );
}
