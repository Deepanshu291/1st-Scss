//Scroll Navbar 

window.addEventListener("scroll", function () {
    //var h = document.querySelector("nav").height();
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 10 );
})

//Mobile Navbar 

const menu = document.querySelector("ul");

    function menuclick() {
    menu.classList.add("active");
    }
    function Cancel() {
        menu.classList.remove("active");
    }