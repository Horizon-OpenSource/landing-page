"use strict";

const menuToggle = document.querySelector(".navbar__menu-toggle");
const navigation = document.querySelector(".navbar__navigation");
const navigationLinks = document.querySelectorAll(".navbar__link");

function closeMobileMenu() {
    navigation.classList.remove("is-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
}

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navigation.classList.toggle("is-open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
    });

    window.addEventListener("resize", () => {

        if (window.innerWidth > 1100) {
            closeMobileMenu();
        }

    });

}