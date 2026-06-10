import { useState } from "react"
function Head(){
        const [toggle, setToggle] = useState(true)

    function Show(){
        setToggle(!toggle)
    }
    return(
        <div className="main">
            <div className="header" onClick={Show}>Click To show Content</div>
            <div className="content"style={{ display: toggle===false ? "block": "none"}} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis architecto corrupti esse. Sapiente, saepe autem ducimus id laborum nisi natus et at sit quos eius ea molestiae similique itaque dignissimos.</div>
        </div>
    )
}

function Types() {
    const [toggle,setToggle]=useState(true);


  return (
    <div>
        <input style={{padding: "5px"  }} type={toggle===true ? "text":"password"} placeholder="type here" />
        <button style={{padding: "5px"  }}  onClick={()=>{
            setToggle(!toggle)
        }} >{ toggle===true ? "Hide": "Show" }</button>
    </div>
  )
}


function inc() {
    const [count,setCount]=useState(0)
  return (
 <div>
    <h1>{count }</h1>
    <button onClick={()=>{
        setCount(count+1)
    }} >+</button>
    <button onClick={()=>{
        setCount(count-1)
    }} >-</button>
 </div>
  )
}

function Changename() {
    const [count,setCount]=useState("username")
    const [toggle,setToggle]=useState(true)

  return (
    <div>
        <h1 style={{color: toggle===true ? "black": "blue" }}>{count}</h1>
        <button  onClick={()=>[
            setCount("Abhay"),
            setToggle(!toggle)
        ]} >ChangeName</button>
    </div>
  )
}



function ChangeImage() {
    const [count,setCount]=useState("https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg")

  return (
    <div>
         <img src={count} alt="" />
     <button onClick={()=>{
        setCount("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWzdL-WsJxWorwLw5obzpeciVOEVmhmuuQ5NE_DUNneA&s&ec=121691707")
     }} > changeImage </button>
    </div>
  )
}


export  {Head,Types,inc,Changename,ChangeImage
    
}
// function Parachange(){
//         const [toggle, setToggle] = useState(true)

//     function Show(){
//         setToggle(!toggle)
//     }
//     return(
//         <div className="changecolor" onClick={Show} style={{background:toggle===false?"green":"blue"}}>
        
//         </div>
//     )
// }
// // 2nd wala 


// function Showthings(){
//      const [toggle, setToggle] = useState(false)
//     function Showpara(){
//  setToggle(true)
//     }
//      function hidepara(){
//  setToggle(false)
//     }
//     return(
//         <div className="butmain">
//             <button onClick={Showpara}>Show</button>
//             <button onClick={hidepara}>Hide</button>
//             <p style={{ display: toggle==true ? "block": "none"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, vitae! Deleniti harum et, numquam similique nisi modi praesentium, possimus soluta, est ipsa laborum consequatur beatae. Vel quis facilis aliquid atque</p>
//         </div>
//     )
// }


