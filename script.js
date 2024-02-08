
var nav = document.getElementsByTagName("nav")[0];


window.addEventListener("scroll",function(){
// nav.addEventListner("scroll")
    if (window.scrollY>50) {
        nav.classList.add("navScroll");
    } else {
        nav.classList.remove("navScroll");
    }
});

// btn
const btn = document.querySelector(".know");
btn.onmousemove=function(e){
    const x = e.pageX - btn.offsetLeft;
    const y = e.pageY - btn.offsetTop;

    btn.style.setProperty('--x', x+ 'px');
    btn.style.setProperty('--y', y+ 'px');

}

// Parallax Effect 
const parallaxElements = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallaxElements.forEach(function (element) {
   
    let speed = parseFloat(element.getAttribute("data-speed")) || 0.5;
    element.style.backgroundPositionY = offset * speed + "px";
  });
});



