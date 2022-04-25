const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const image = document.querySelector(".jscontent__img");
const title = document.querySelector(".jscontent__title");
const para = document.querySelector(".jscontent__para");


const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

option1.addEventListener("click", () => {
    image.src = "illustration-features-tab-1.svg";
    title.textContent = "Bookmark in one click";
    para.textContent = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    option1.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    option2.style.borderBottom = "1px solid hsl(229, 8%, 60%)";
    option3.style.borderBottom = "1px solid hsl(229, 8%, 60%)";
    option1.style.fontWeight = "500";
    option2.style.fontWeight = "400";
    option3.style.fontWeight = "400";
    option1.style.color = "#000";
    option2.style.color = "hsl(229, 8%, 60%)";
    option3.style.color = "hsl(229, 8%, 60%)";
});

option2.addEventListener("click", () => {
    image.src = "illustration-features-tab-2.svg";
    title.textContent = "Intelligent search";
    para.textContent = "Our powerful search features will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    option1.style.borderBottom = "1px solid hsl(229, 8%, 60%)";
    option2.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    option3.style.borderBottom = "1px solid hsl(229, 8%, 60%)";
    option1.style.fontWeight = "400";
    option2.style.fontWeight = "500";
    option3.style.fontWeight = "400";
    option1.style.color = "hsl(229, 8%, 60%)";
    option2.style.color = "#000";
    option3.style.color = "hsl(229, 8%, 60%)";
});

option3.addEventListener("click", () => {
    image.src = "illustration-features-tab-3.svg";
    title.textContent = "Search your bookmarks";
    para.textContent = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button";
    option1.style.borderBottom = "1px solid hsl(229, 8%, 60%)";
    option2.style.borderBottom = "1px solid hsl(229, 8%, 60%)";
    option3.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    option1.style.fontWeight = "400";
    option2.style.fontWeight = "400";
    option3.style.fontWeight = "500";
    option1.style.color = "hsl(229, 8%, 60%)";
    option2.style.color = "hsl(229, 8%, 60%)";
    option3.style.color = "#000";
});

question1.addEventListener("click", () => {
    if (answer1.style.display === "none") {
        answer1.style.display = "block";
    } else {answer1.style.display = "none"}
});

question2.addEventListener("click", () => {
    if (answer2.style.display === "none") {
        answer2.style.display = "block";
    } else {answer2.style.display = "none"}
});

question3.addEventListener("click", () => {
    if (answer3.style.display === "none") {
        answer3.style.display = "block";
    } else {answer3.style.display = "none"}
});

question4.addEventListener("click", () => {
    if (answer4.style.display === "none") {
        answer4.style.display = "block";
    } else {answer4.style.display = "none"}
});

// MOBILE MENU VERSION

const navOpen = document.querySelector(".menu-open");
const navClose = document.querySelector(".menu-close");
const mobileNav = document.querySelector(".nav__place");

navOpen.addEventListener("click", () => {
    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "block";
    } else {mobileNav.style.display = "none";}
});

navClose.addEventListener("click", () => {
    if (mobileNav.style.display === "block") {
        mobileNav.style.display = "none";
    } else {mobileNav.style.display = "block";}
});