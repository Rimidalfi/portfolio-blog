import "./App.css";
import {useState, useEffect } from "react"
// import { createClient, require } from "contentful";
import * as contentful from 'contentful';

export default function App() {
  const [entry, setEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const client = contentful.createClient({
      space: 'olu9a7ygdxxu',
      environment: 'master',
      accessToken: 'aYK12iQVXz9b2zo_o69BiHCBFBhKuOSDuTBINnY0flA'
    });
 
    client.getEntry('69h79znTMalpnUZxUaQ8Be')
      .then((entry) => {
      if (typeof entry === 'object' && entry !== null) {
      setEntry([entry]);
      setIsLoading(false);
      console.log(entry)
    } else {
      throw new Error("Data is not an object.");
    }
  })
  .catch(console.error);
  }, []);
 
  return (
    <>
      <h1>Portfolio</h1>
      {isLoading ? (
     <p>Loading...</p>
   ) : (
      entry && entry.map((item) => (
     <div key={item.sys.id}>
       <div>{item.fields.titel}</div>
       <img src={item.fields.header.fields.file.url} alt={item.fields.header.fields.title} />
       {item.fields.blogCards.content.map((contentItem, contentId) => (
       <p key={contentId}>{contentItem.content[0].value}</p>
     ))}
       </div>
      )))
   }
    </>
  );
 }
      // .then((entry) => console.log(entry))
      // .then((entry) => setEntry(entry))
      // .then((entry) => setIsLoading(false))
      // .catch(console.error);
  //     .then((entry) => {
  //       if (Array.isArray(entry)) {
  //         setEntry([entry]);
  //         setIsLoading(false);
  //       } else {
  //         throw new Error("Data is not an array.");
  //       }
  //     })
  //     .catch(console.error);
  //  }, []);