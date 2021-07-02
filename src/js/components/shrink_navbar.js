/* ---- Shrink Navbar ---- */

// When the user scrolls down 100px from the top of the document, resize the navbar's padding and the logo's font size

export function scrollFunction() {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.querySelector("#header").classList.add("shadow-md");
        document.querySelector(".header__wraper").classList.remove("h-24");
        document.querySelector(".header__wraper").classList.add("h-14");
        document.querySelector(".header__logo").classList.add("scale-50");
        document.querySelector(".header__nav").style.fontSize = "14px";
    } else {
        document.querySelector("#header").classList.remove("shadow-md");
        document.querySelector(".header__wraper").classList.remove("h-14");
        document.querySelector(".header__wraper").classList.add("h-24");
        document.querySelector(".header__logo").classList.remove("scale-50");
        document.querySelector(".header__nav").removeAttribute("style");
    }
}
