import { useState, useEffect } from "react"
import Logo from "./Logo"
import Navigation from "./Navigation"
import * as contentful from "contentful"
import { Link } from "react-router-dom"

export default function Header() {
  const[navi, setNavi] = useState(null)

    const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;

    // Peter API
    // const URL = `https://cdn.contentful.com/spaces/${VITE_SPACE_ID}/entries/5Vc2P1WXzlVV4SjzIqQCFy?access_token=${VITE_ACCESS_TOKEN}&content_type=Navbar`
    

  
  useEffect(() => {
    const client = contentful.createClient({
      space: 'oz7f6gt77mhs',
      environment: 'master',
      accessToken: 'TvI3tvQ_YpazFu5isGpalaV2u-7RTmAEzxRTGqjFBqA'
    });
 
    client.getEntry('5Vc2P1WXzlVV4SjzIqQCFy')
        .then(data => {
          console.log(data);
          setNavi([data]);
        })
        .catch(console.error);
     }, []);



const logo = navi?.map((item)=>{
  return <img className="logo" key={item.sys.id} src={item.fields.logo.fields.file.url}/>})

    const Header = navi?.map((item)=>{
        return (
        <ul key={item.sys.id}>
         <Link to="/"> <li>{item.fields.home}</li> </Link>
         <Link to="/Blog"><li>{item.fields.blog}</li></Link>
         <Link to="/AboutUs"><li>{item.fields.aboutUs}</li></Link>
        </ul>)})
        
  return (
    <>
        {navi !== null ? (
          <nav>
       <Logo logo={logo} />
       <Navigation navigation={Header} /> 
       </nav>
       ) : (
        <p>LOADING ...</p>
      )}
    
    </>
  );
}
