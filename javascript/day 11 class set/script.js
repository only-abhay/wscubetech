var bopx=document.querySelectorAll(" .card")
var bp=document.querySelector(".bp")
var button=document.querySelector("button")
var abha=document.querySelector("#abh")
for(let bo of bopx){
 bo.addEventListener("click",
    function(event){
        bp.classList.add("bpo")
       abha.src = event.target.src;
       
    }
 )
}
button.addEventListener("click",
      function(){
        bp.classList.remove("bpo")
      }
)