const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const mobileMenu = document.querySelector(".nav");

openMenu.addEventListener("click", function() {
    mobileMenu.style.display = "block";
    body.display.backgroundColor = "black";
});

closeMenu.addEventListener("click", function() {
    mobileMenu.style.display = "none";
});