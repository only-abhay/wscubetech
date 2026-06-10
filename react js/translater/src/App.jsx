import { useRef, useState } from "react";

 function App(){
 const [datas,setDatas]=useState("")
 const [toggle,setToggle]=useState(false)
 const infoRef=useRef();
 async function translater(){
 const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=hi&dt=t&q=${infoRef.current.value}`;
 const  res  =  await  fetch  (  url  ); 
 const  data  =  await  res.json(); 
      setDatas(data[0][0][0]);  
      setToggle(true);
 } 
      return(
  <div>
     <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card p-3 shadow">
            <h4 className="mb-3 text-center">Enter Your Text</h4>
            <textarea ref={infoRef} id="textInput" className="form-control mb-3" rows="5" placeholder="Type something here..."></textarea>
            <button onClick={translater} className="btn btn-primary w-100" id="but">Submit</button>
            {
              toggle && 
              <div id="resultBox" className="alert alert-secondary">
              {
                <p id="resultText">
                {datas}
              </p>
              }

            </div>
            }

          </div>

        </div>
      </div>
      </div>
    </div>
)
}
export default App