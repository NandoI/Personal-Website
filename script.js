window.onscroll = function(){
   scrollingnavbar();
};

let navbar = document.getElementById("nav-nav")
let tetap = navbar.offsetTop

function scrollingnavbar(){
    if (window.pageYOffset >= tetap) {
        navbar.classList.add("tetap")
    } else {
        navbar.classList.remove("tetap")
    }
}