// DOM declarations
let menuTarget = document.querySelector(".nav-title i");
let menu = document.querySelector("header nav");
let scrollLinks = document.querySelectorAll(".scroll-link");
let scrollTargets = document.querySelectorAll(".scroll-target");

// Menu icon event listener assignment
menuTarget.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
    menuTarget.classList.toggle("menu-icon-active");
})

// scrollCursor function
const scrollCursor = () => {
    // Loop that assigns event listeners to nav links to scroll to targeted sections in DOM based off index values (1 to 1 relationship)
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", () => {
            scrollTargets[i].scrollIntoView({behavior: "smooth", block: "start"});        
        })
    }
}

// Calls scrollCursor function at run time
scrollCursor();