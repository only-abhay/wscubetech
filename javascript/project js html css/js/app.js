var menHead = document.querySelector(".menu-head");
var rightheader = document.querySelector(".right-header ul");
var usingnav = document.querySelector(".usingnav");
var header = document.querySelector("header");
menHead.addEventListener("click", function () {
  rightheader.classList.toggle("top-up");
});
// clock
var time = document.querySelector(".container h1");
var but = document.querySelector("button");
var dtt = document.querySelector(".date");
var toggle = false;
but.addEventListener("click", function () {
  toggle = !toggle;
  but.classList.toggle("toggle");
  if (but.innerText === "24hr") {
    but.innerText = "12hr";
  } else {
    but.innerText = "24hr";
  }
});

function clock() {
  var din = new Date();
  var h = din.getHours();
  var m = din.getMinutes();
  var s = din.getSeconds();

  if (h > 12 && toggle == false) {
    h = h - 12;
  }
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  time.innerText = `${h}:${m}:${s}`;
}
setInterval(clock, 1000);
// slider
var slider = document.querySelectorAll(".myntra");
var count = 0;

function autoSlide() {
  count++;

  if (count == slider.length - 1) {
    count = 0; // last ke baad first image
  }

  for (let item of slider) {
    item.style.transform = `translateX(-${count * 1280}px)`;
  }
}

// 3 second me slide change
setInterval(autoSlide, 3000);

// tabs open
var bopx = document.querySelectorAll(" .injava");
var bp = document.querySelector(".bp");
var button = document.querySelector(".bp-but");
var abha = document.querySelector("#abh");
for (let bo of bopx) {
  bo.addEventListener("click", function (event) {
    bp.classList.add("bpo");

    abha.innerHTML = bo.innerHTML;
  });
}
button.addEventListener("click", function () {
  bp.classList.remove("bpo");
});
// accordian

var title = document.querySelectorAll(".title");
var para = document.querySelectorAll(".para");

for (let t of title) {
  t.addEventListener("click", function (e) {
    var pp = e.target.nextElementSibling;
    if (e.target.classList.contains("click")) {
      e.target.classList.remove("click");
      pp.style.height = "";
      pp.classList.remove("open");
    } else {
      var currentac = document.querySelector(".click");
      if (currentac) {
        currentac.classList.remove("click");
      }
      var currentop = document.querySelector(".open");
      if (currentop) {
        currentop.classList.remove("open");
        currentop.style.height = "";
      }
      e.target.classList.add("click");
      pp.style.height = pp.scrollHeight + "px";
      pp.classList.add("open");
    }
  });
}
// form
document.querySelectorAll("form").forEach((form) => {
  form.onsubmit = (e) => {
    e.preventDefault();
    alert("Success! Form data captured (Logic Applied).");
  };
});

// img-pop up
var img = document.getElementById("heroImage");
var popup = document.getElementById("popup");
var close = document.getElementById("closeBtn");

img.addEventListener("click", function () {
  popup.style.display = "flex";
});

close.addEventListener("click", function () {
  popup.style.display = "none";
});
// tyabs 
function showTab(tabId){

  let tabs = document.querySelectorAll(".tab");
//  let none=document.querySelector(".tabs-none")
  tabs.forEach(function(tab){
    tab.style.display = "none";
  });
  document.getElementById(tabId).style.display = "block";
}
