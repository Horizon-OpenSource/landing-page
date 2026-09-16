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

const revealElements = document.querySelectorAll(
    ".problem-benefits__problem, .benefit-card, " +
    ".segments__header, .segment-card, " +
    ".features__header, .feature-card, " +
    ".scopes__header, .scope-card, " +
    ".how-it-works__header, .process-step"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.setProperty("--reveal-delay", `${(index % 5) * 60}ms`);
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}