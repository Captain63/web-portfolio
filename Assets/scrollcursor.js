// scrollCursor script

const scrollCursor = () => {
    // DOM declarations
    let scrollLinks = document.querySelectorAll(".scroll-link");
    let scrollTargets = document.querySelectorAll(".scroll-target");

    /* let aboutMe = document.querySelector(".about-me");
    let selectedWorks = document.querySelector(".selected-works");
    let contact = document.querySelector(".contact"); */

    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", () => {
            scrollTargets[i].scrollIntoView({behavior: "smooth", block: "start"});        
        })
    }
}

scrollCursor();