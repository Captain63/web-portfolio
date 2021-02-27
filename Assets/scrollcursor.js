// scrollCursor script

const scrollCursor = () => {
    // DOM declarations
    let scrollLinks = document.querySelectorAll(".scroll-link");
    let scrollTargets = document.querySelectorAll(".scroll-target");

    /* Loop that assigns event listeners to nav links to scroll to targeted sections in DOM based off index values (1 to 1 relationship) */
    for (let i = 0; i < scrollLinks.length; i++) {
        scrollLinks[i].addEventListener("click", () => {
            scrollTargets[i].scrollIntoView({behavior: "smooth", block: "start"});        
        })
    }
}

// Calls scrollCursor function at run time
scrollCursor();