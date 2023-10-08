window.onscroll = function(){
    scrollingnavbar();
 };
 
 let navbar = document.getElementsByClassName("container-nav")[0]
 let tetap = navbar.offsetTop
 
 function scrollingnavbar(){
     if (window.pageYOffset >= tetap) {
         navbar.classList.add("tetap")
     } else {
         navbar.classList.remove("tetap")
     }
 }