var inp = document.querySelector("#inp")
var add= document.querySelector("#addi")
var ullist= document.querySelector("#ullist")
var tsk=[]

// function getNames(){
//    var stringify= localStorage.getItem("tsk")
if(stringify==null)return;
//    tsk=JSON.parse(stringify)
//    for( let t of tsk){
//        var li=document.createElement("li");
//      li.innerText=t;
//      ullist.prepend(li)
//     li.classList.add('listyle');
//     var del=document.createElement("span")
//      del.classList.add("deli")
//      del.innerText="Delete"
//      li.prepend(del)
//      del.onclick=function(){
//         li.remove()
//    }
// }
inp.addEventListener(
    "keyup",
    function(e){
    if(e.key==="Enter" && inp.value!==""){
       addbut()
    }
}
)
function addbut(){
if(inp.value!==''){
   tsk.push(inp.value)
}
   localStorage.setItem("tsk",JSON.stringify(tsk))
      if(inp.value!=""){
      var li=document.createElement("li");
     li.innerText=inp.value;
     li.classList.add('listyle');
     ullist.prepend(li)
     inp.value=""
     var del=document.createElement("span")
     del.classList.add("deli")
     del.innerText="Delete"
     li.prepend(del)
     del.onclick=function(){
        li.remove()
     }
      }
}


