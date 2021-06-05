// DOM declarations
const menuTarget = document.querySelector(".nav-title i");
const menu = document.querySelector("header nav");
const scrollLinks = document.querySelectorAll(".scroll-link");
const scrollTargets = document.querySelectorAll(".scroll-target");
const navTitle = document.querySelector(".nav-title");

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



// Function to capture height of nav-title and set margin + top values dynamically for mobile menu
const navTitleHeight = () => {
    const window725px = window.matchMedia("(max-width: 725px)");

    // Confirms menu should be hidden based off media query
    if (window725px.matches) {
        // Calculates height of Title header
        const heightOffset = navTitle.clientHeight;

        // Uses negative margin and top styles to hide mobile menu behind Title header until dropped down
        menu.style.marginTop = `${(-heightOffset)}px`;
        menu.style.top = `${(-heightOffset)}px`;
    }
}
  
// Calls scrollCursor function at run time
scrollCursor();

// Calls navTitleHeight function at run time
navTitleHeight();

// Attach navTitleHeight listener on window resizing
window.addEventListener("resize", navTitleHeight);