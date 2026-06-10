var slider = document.querySelectorAll(".slider img");
var count = 0;
function slide(a) {
  if (a == 1) {
    if (count == 0) {
      alert("first img");
    } else {
      count--;
      for (item of slider) {
        item.style.transform = `translateX(-${count * 600}px)`;
      }
    }
  } else if (a == 2) {
    if (count == slider.length - 15) {
      count = 0;
    }
    count++;
    for (item of slider) {
      item.style.transform = `translateX(-${count * 600}px)`;
    }
  }
}
