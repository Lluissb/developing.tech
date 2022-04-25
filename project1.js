function mobileMenu() {
    if (document.querySelector(".nav").style.display === "block") {
        document.querySelector(".nav").style.display = "none";
    } else { document.querySelector(".nav").style.display = "block";
    }
}
document.querySelector(".burger-menu").addEventListener("click", mobileMenu);