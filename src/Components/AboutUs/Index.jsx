import { useState, useEffect } from "react";
import { createClient } from "contentful";

// Import enviromental variables deconstructed
const { VITE_SPACE_ID, VITE_ACCESS_TOKEN } = import.meta.env;
const AboutUs = () => {
  const [autorlist, setAutorlist] = useState([]);
  useEffect(() => {
    //erstellen Client mit Zugangsdaten
    const client = createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });
    //API Fetch der spezifischen Daten
    client
      .getEntries({content_type: "autor"})
      .then((response) => {
        setAutorlist(response.items);
        
      })
      .catch(console.error);
  }, []);

  console.log(autorlist)

const ListOfAutors = autorlist?.map((item) => {

       return (
          <>
            <div key={item.sys.id} className="autorenliste">
             <div className="autorName">
             <h2>{item.fields.nameAutor}</h2>
             </div>
             <div className="autorBild">
             <img src={item.fields.autorenbild.fields.file.url} className="autorImg"/>
             </div>
             <div className="autorAbout">
             <p>{item.fields.about}</p>
             </div>
             </div>
        </>
    )})
   return (
    <>
        <h1>Unser Autorenteam</h1>
        <div>{ListOfAutors}</div>

//       {/* {impressumpost !== null ? (
//         <ImpressumPost 
//           impressumJSON={impressumpost.impressumText}
//         />
//       ) : (
//         <p>LOADING ...</p>
//       )} */}
    </>
   );
};

export default AboutUs;