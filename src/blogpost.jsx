import { useEffect } from "react";

export default function BlogPost (){
    const { VITE_ACCESS_TOKEN, VITE_SPACE_ID } = import.meta.env;
    const URL = `https://cdn.contentful.com/space/${VITE_SPACE_ID}/entries?access_token=${VITE_ACCESS_TOKEN}&conten_type=`
    useEffect (()=>{
    fetch(URL).then(response => response.json()).then(data => setState(data.items))    
    },[]
    )
    ListOfProducts = state.map((item)=>{
        return <div key={sys.id}>{item.fields.name}</div>})
    return(
    {ListOfProducts}
    )
}