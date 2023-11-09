import { useState, useEffect } from "react";
import * as contentful from "contentful";
import { Link } from "react-router-dom";
import BlogFeed from "../BlogFeed/Index";
import { Helmet } from "react-helmet";
import Head from "../Head";

export default function Home() {
  const [header, setHeader] = useState(null);
  const headerID = "3RNUuPtoHE3ZdLUOMYmGCj"
  const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;

  useEffect(() => {
    const client = contentful.createClient({
      space: VITE_SPACE_ID,
      environment: "master",
      accessToken: VITE_ACCESS_TOKEN,
    });

    client
      .getEntry(headerID)
      .then((data) => {
        setHeader([data]);
      })
      .catch(console.error);
  }, []);

  // const headerBild = header?.map((item) => {
  //   return (
  //     <div
  //     /* <img */
  //       className="header"
  //        key={item.sys.id}
  //        style={{ 
  //         backgroundImage: `url(${item.fields.headerBild.fields.file.url})`, 
  //         backgroundPosition: 'center', 
  //         backgroundSize: 'cover' 
  //       }}></div>
  //       //  src={item.fields.headerBild.fields.file.url}
  //     // />
  //   );
  // });

  const headerTitel = header?.map((item) => {
    return (<div key={item.sys.id}><h1 className="headerTitel">{item.fields.homeTitel}</h1>
    <p className="subTitel">{item.fields.headerTitel}</p></div>)
  });


  return (
    <>
    <Head> 
      <title>KI Blog - Home</title>
    </Head>
    {header?.map((item) => {
    return (
      <div
  
        className="header"
         key={item.sys.id}
         style={{ 
          backgroundImage: `url(${item.fields.headerBild.fields.file.url})`, 
          backgroundPosition: 'center', 
          backgroundSize: 'cover' 
        }}>
         
        <div className="titelContainer">
          <div className="headerContent">
          {headerTitel}
          </div>
        </div>    
      </div>);
  })}
      <BlogFeed blogCount={5} />

    </>
  );
}
