window.addEventListener("scroll", function () {
    //var h = document.querySelector("nav").height();
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 10 );
})