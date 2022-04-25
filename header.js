const mobileNav = document.querySelector(".nav");
const mobileNavOpen = document.querySelector(".open");
const navLinks1 = document.getElementById("navLinks1");
const navLinks2 = document.getElementById("navLinks2");
const navLinks3 = document.getElementById("navLinks3");


mobileNavOpen.addEventListener("click", function() {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {
        mobileNav.style.display = "none"
    }
});

navLinks1.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
});

navLinks2.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
});

navLinks3.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {
        mobileNav.style.display = "block";
    }
});