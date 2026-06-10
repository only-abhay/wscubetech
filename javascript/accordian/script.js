
// var title=document.querySelectorAll(".title")
// var para=document.querySelectorAll(".para")
// for(let t of title){
//     t.addEventListener(
//         "click",
//         function(e){
//             var pp=e.target.nextElementSibling;
//             pp.classList.toggle("click")
//           for(let pu of para){
//               if(pu!==pp){
//                 pu.style.height=""
//             pu.classList.remove("click")
//               }
//           }
//             if(pp.classList.contains("click")){
//            pp.style.height=pp.scrollHeight+"px";
//             }else{
//                 pp.style.height=""
//             }
//         }
//     )
// }


var title=document.querySelectorAll(".title")
var para=document.querySelectorAll(".para")

for( let t of title){
    t.addEventListener(
        "click",
        function(e){
         var pp=e.target.nextElementSibling; 
           if( e.target.classList.contains("click")){
            e.target.classList.remove("click")
              pp.style.height=""
             pp.classList.remove("open")
            
           }else{
            var currentac=document.querySelector(".click")
            if(currentac){
                currentac.classList.remove("click")
            }
            var currentop=document.querySelector(".open")
            if(currentop){
                currentop.classList.remove("open")
                currentop.style.height=""
            }
              e.target.classList.add("click")
            pp.style.height=pp.scrollHeight+"px";
            pp.classList.add("open")

           }

        }
    )
}