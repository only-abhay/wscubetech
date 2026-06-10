import { useEffect, useState } from "react";
import Card from "./card.jsx";

function Products(){
    const[value,getValue]=useState([])

   async function getdata(){
        const getting=  await fetch('https://dummyjson.com/products')
        const data= await getting.json();
        getValue(data.products)
        console.log(data.products)
    }
   useEffect(
    ()=>{
        getdata()
    },
    [],
)
return(
   <Card value={value}  />
       
)
}


export default Products