// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// ================= TYPING EFFECT =================

const typingText = document.getElementById("typing-text");

const roles = [
    "AI & Data Science Student",
    "Python Developer",
    "AI Enthusiast",
    "Future Data Scientist"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {
        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeEffect, 1600);
            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            roleIndex =
                (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 55 : 90
    );
}

typeEffect();


// ================= SCROLL REVEAL =================

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ================= BACK TO TOP =================

const topButton =
    document.getElementById("top-btn");

window.addEventListener("scroll", () => {

    if (!topButton) return;

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

if (topButton) {

    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        alert(
            "Thanks for reaching out! I'll get back to you soon."
        );

        contactForm.reset();

    });

}


// ================= CURRENT YEAR =================

const year =
    document.getElementById("year");

if (year) {
    year.textContent =
        new Date().getFullYear();
}
