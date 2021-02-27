// Mobile Menu Event Listener

// DOM declarations
let menuTarget = document.querySelector(".nav-title i");
let menu = document.querySelector("header nav");

// Menu icon event listener assignment
menuTarget.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
    menuTarget.classList.toggle("menu-icon-active");
})