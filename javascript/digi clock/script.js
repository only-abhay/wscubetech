
var time= document.querySelector(".container h1");
var but=document.querySelector("button");
var dtt=document.querySelector(".date");
    var toggle=false;
       but.addEventListener("click",
   function(){
  toggle=!toggle
  but.classList.toggle("toggle")
  if(but.innerText==="24hr"){
    but.innerText= "12hr"
  }else{
    but.innerText="24hr"
  }
   }
   )

function clock(){
    var din= new Date();
    var h=  din.getHours();
    var m=  din.getMinutes();
    var s=  din.getSeconds();

  if(h>12 && toggle==false){
    h=h-12
  }
    if(h<10) h="0"+h;
    if(m<10)m="0"+m ;
    if(s<10)s="0"+s;

    if(dt<10)dt="0"+dt;
    if(mon<10)mon="0"+mon;
    time.innerText=`${h}:${m}:${s}`
    
}

setInterval(
    clock,
    1000,
)
 
var time= document.querySelector(".container h1");
var clss= document.querySelector(".week");
var but=document.querySelector("button");
var dtt=document.querySelector(".date");

var weeks=["sun","mon","Tue","Wed","thru","Fri","Sat"];
    var toggle=false;
       but.addEventListener("click",
   function(){
  toggle=!toggle
  but.classList.toggle("toggle")
  if(but.innerText==="24hr"){
    but.innerText= "12hr"
  }else{
    but.innerText="24hr"
  }
   }
   )

function clock(){
    var din= new Date();
    var h=  din.getHours();
    var m=  din.getMinutes();
    var s=  din.getSeconds();
    var dt=din.getDate();
    var mon=din.getMonth();
    var yr=din.getFullYear()

  if(h>12 && toggle==false){
    h=h-12
  }
    if(h<10) h="0"+h;
    if(m<10)m="0"+m ;
    if(s<10)s="0"+s;

    if(dt<10)dt="0"+dt;
    if(mon<10)mon="0"+mon;
    time.innerText=`${h}:${m}:${s}`
    dtt.innerText=`${dt}:${mon}:${yr}`
    
}
function day(){
   for(var i=0;i<weeks.length;i++){
       var span=document.createElement("span")
          clss.append(span)
          span.innerHTML=weeks[i]
        var din= new Date();
        var dd = din.getDay();
         if(dd===i){
            span.classList.add("changecolor")
         }
         
   }
}
day()
setInterval(
    clock,
    1000,
)