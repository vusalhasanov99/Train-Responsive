let menuIcon = document.querySelector(".menu-icon i");
let navbar = document.querySelector(".navbar-click");
let menu = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", function () {
    if (navbar.style.transform != "translateX(0px)") {
        navbar.style.transform = "translateX(0px)";
        menu.style.backgroundColor = "#2ec3e3";
    }
    else {
        navbar.style.transform = "translateX(200px)";
        menu.style.backgroundColor = "transparent";

    }
})





