const descriptions = ["Computer Enthusiast", "Game Developer", "Gyatt Enjoyer"];
let index = 0;
let charIndex = 0;
const typewriterElement = document.getElementById("typewriter");

function typeEffect() {
    if (charIndex < descriptions[index].length) {
        typewriterElement.textContent += descriptions[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 2000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typewriterElement.textContent = descriptions[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % descriptions.length;
        setTimeout(typeEffect, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();

    // Set background images for timeline circles
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach(item => {
        const imageUrl = item.getAttribute("data-image");
        if (imageUrl) {
            item.style.setProperty("--circle-image", `url(${imageUrl})`);
        }
    });
});

function handleScroll() {
    const overviewSection = document.getElementById("overview");
    const aboutLeft = document.querySelector(".about-left");
    const aboutLinks = document.querySelector(".about-links");
    const aboutText = document.querySelector(".about-text");
    const overviewHeading = document.querySelector("#overview h1");

    const sectionTop = overviewSection.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    // Adjust the multiplier (e.g., 0.6) to control when the animation triggers
    if (sectionTop <= viewportHeight * 0.2) {
        aboutLeft.classList.add("scrolled");
        aboutLinks.classList.add("scrolled");
        aboutText.classList.add("scrolled");
        overviewHeading.classList.add("scrolled");
    }
}

document.addEventListener("scroll", handleScroll);

function handleEducationScroll() {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const triggerPoint = window.innerHeight / 1.3; // Trigger animation when section is in view

    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerPoint) {
            setTimeout(() => {
                item.classList.add("scrolled");
            }, index * 300); // Delay each item for a staggered effect
        }
    });
}

document.addEventListener("scroll", handleEducationScroll);

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID
        let targetElement = document.getElementById(targetId);

        // Redirect "About" button to the "Meet Jerson" section
        if (targetId === 'about') {
            targetElement = document.getElementById('overview');
        }

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling
                block: 'start' // Scroll to the top of the section
            });
        }
    });
});

document.querySelector('.navbar-name').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0, // Scroll to the very top of the page
        behavior: 'smooth' // Enable smooth scrolling
    });
});
