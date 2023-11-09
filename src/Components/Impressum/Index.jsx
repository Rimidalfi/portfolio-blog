import { useState, useEffect } from "react";
import { createClient } from "contentful";
import ImpressumPost from "./ImpressumPost";
import { Helmet } from "react-helmet";
import Head from "../Head";

const entryID = "3QmiOyhMCCGpPkcG9gxcqr";
// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const Impressum = () => {
  const [impressumpost, setImpressumpost] = useState(null);
  useEffect(() => {
    //erstellen Client mit Zugangsdaten
    const client = createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });
    //API Fetch der spezifischen Daten
    client
      .getEntry(entryID)
      .then((entry) => {
        setImpressumpost(entry.fields);
      })
      .catch(console.error);
  }, []);
  console.log(
    impressumpost !== null
      ? ("Impressum:", impressumpost.impressumText.content)
      : "Lade Impressum Objekt"
  );
  return (
    <>
        <Head>
        <title>Impressum</title>
        </Head>
      {impressumpost !== null ? (
        <ImpressumPost
          impressumJSON={impressumpost.impressumText}
        />
      ) : (
        <p>LOADING ...</p>
      )}
    </>
  );
};

export default Impressum;
