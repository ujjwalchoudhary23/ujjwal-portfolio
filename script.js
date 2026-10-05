/* ================================
Ujjwal Choudhary Portfolio
JavaScript
================================ */

/* Mobile Navigation */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {


menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


}

/* Close menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {


link.addEventListener("click", () => {

    if (navLinks) {
        navLinks.classList.remove("active");
    }

});


});

/* Smooth scrolling */

document.querySelectorAll('a[href^="#"]').forEach(link => {


link.addEventListener("click", function(event) {

    const target = document.querySelector(
        this.getAttribute("href")
    );

    if (target) {

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    }

});


});

/* Typing Animation */

const typingText = document.getElementById("typing-text");

const words = [
"AIDD Student",
"Web Developer",
"AI Enthusiast",
"Technology Lover"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {


if (!typingText) return;

const currentWord = words[wordIndex];

if (!deleting) {

    typingText.textContent =
        currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

        deleting = true;

        setTimeout(typeEffect, 1500);

        return;
    }

} else {

    typingText.textContent =
        currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

        deleting = false;

        wordIndex =
            (wordIndex + 1) % words.length;

    }

}

setTimeout(
    typeEffect,
    deleting ? 60 : 100
);


}

typeEffect();

/* Back to Top Button */

const topButton = document.getElementById("top-btn");

window.addEventListener("scroll", () => {


if (!topButton) return;

if (window.scrollY > 400) {

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

/* Reveal sections on scroll */

const sections =
document.querySelectorAll(".reveal");

const observer =
new IntersectionObserver(


    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


sections.forEach(section => {


observer.observe(section);


});

/* Current year */

const year =
document.getElementById("year");

if (year) {


year.textContent =
    new Date().getFullYear();


}

/* Contact Form */

const contactForm =
document.getElementById("contact-form");

if (contactForm) {


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        contactForm.reset();

    }
);


}
