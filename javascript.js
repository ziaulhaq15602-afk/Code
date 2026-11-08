// Mobile Navigation

const menu = document.querySelector("#menu");
const navbar = document.querySelector("#navbar");

menu.onclick = () => {

    navbar.classList.toggle("active");

    const icon = menu.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }

};


// Close Menu After Clicking Link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menu.querySelector("i");

        icon.classList.replace("fa-xmark", "fa-bars");

    });

});


// Typing Animation

const typingText = document.querySelector(".typing");

const words = [
    "Computer Science Student",
    "Java Programmer",
    "C++ Programmer",
    "Future Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingText.textContent =
        currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {

        deleting = true;
        speed = 1500;

    }

    else if (deleting && charIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 500;

    }

    setTimeout(typeEffect, speed);

}

typeEffect();


// Active Navigation On Scroll

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    document.querySelectorAll("nav a").forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// Contact Form Demo

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message form is ready. Connect an email service to receive messages.");

    contactForm.reset();

});


// Footer Current Year

const footerText = document.querySelector("footer p");

footerText.innerHTML =
    `© ${new Date().getFullYear()} Zia Ul Haq. All Rights Reserved.`;