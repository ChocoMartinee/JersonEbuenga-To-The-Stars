const descriptions = ["Computer Enthusiast", "Game Developer", "Gyatt Enthusiast"];
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
});
