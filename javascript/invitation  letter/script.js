var names=document.querySelector("#nme")
var nameRight=document.querySelector(".name-right")

names.addEventListener(
    "keyup",
    function(e){
        names=e.target.value
        nameRight.innerHTML=names
     }
)
var nme=document.querySelector("#number")
var numRight=document.querySelector('.num-right')
nme.addEventListener(
    "keyup",
    function(e){
        nme=e.target.value
        numRight.innerHTML=nme
     }
)
var gmail=document.querySelector("#gmal")
var gmailRight=document.querySelector('.Gmail-right')
gmail.addEventListener(
    "keyup",
    function(e){
        gmail=e.target.value
        gmailRight.innerHTML=gmail
     }
)
var fontplus=document.querySelector("#fontplus")
var fontminus=document.querySelector("#fontminus")
   var count="1"
fontplus.addEventListener(
    "click",

    function(){
        count++
        if(count>=20){
        document.querySelector(".conatiner").style.fontSize=`${count}px`
        }
    }
)
fontminus.addEventListener(
    "click",

    function(){
        count--
        if(count>=0){
         var div =document.querySelectorAll("div")
         for(let di of div){
            di.style.fontSize=`${count}px`
            console.log(di)
         }
        }
    }
)