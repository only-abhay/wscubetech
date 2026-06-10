import React, { useState } from 'react'

function Question() {
    const [count,setCount]=useState("off")
   function ChnageText(){
   if(count==="off"){
        setCount("Low")
    }else if(count==="Low"){
        setCount("High")
    }else if(count==="High"){
        setCount("off")
    }
   }
  return (
    <button onClick={ChnageText}>
        {count}
    </button>
  )
}

function ControInput() {
    const [count,setCount]=useState(null)

    function GetData(event){
     setCount(event.target.value)
    }

  return (
    <div>
        <input type="text" onChange={GetData}  />
        <p>{count}</p>
    </div>
  )
}

function Filter() {
    const [count,setCount]=useState([])
    const [items,setitems]=useState("")

      function GetData(event){
       
       setitems(event.target.value)
        
        
    }
     function Showdata(){
         const data= items.trim();
         const vaa= [...count,data]
          if(count.includes(data)){
            return
          }else{
             setCount(vaa)
             setitems("")
          }
     }

  return (
     <div>
      <input type="text" onChange={GetData} value={items}  />
      <button onClick={Showdata}> click to add</button>
{
  count.map((d,i)=>{
   return(
    <p>
    {d}
   </p>
   )
  })
}

     </div>
  )
}


function Cart() {
    const [count,setCount]=useState(0)
    const [items,setitems]=useState(0)

    function Inc(){
    }
    function PrizeApple(){
      setitems( items+5)
       setCount(count+1)

    }
    function PrizeOrange(){
      setitems(items+10)
       setCount(count+1)
    }

  return (
<div>
  <button onClick={Inc} onClick={PrizeApple}>Add Apple $5</button>
  <button onClick={Inc} onClick={PrizeOrange} >Add Orange $10</button>
  <h1>Item Count : {count}</h1>
  <h1>Total Prize : {items}</h1>
</div>
  )
}

export {ControInput , Question ,Filter , Cart}