// Loading Screen

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 1000);

}, 1200);

});

// Typing Animation

const words = [
"Web Developer",
"AI Enthusiast",
"Video Editor"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

const currentWord = words[wordIndex];

if (!deleting) {

typingElement.textContent =
currentWord.substring(0, charIndex + 1);

charIndex++;

if (charIndex === currentWord.length) {

deleting = true;

setTimeout(typeEffect, 1200);

return;

}

} else {

typingElement.textContent =
currentWord.substring(0, charIndex - 1);

charIndex--;

if (charIndex === 0) {

deleting = false;

wordIndex++;

if (wordIndex >= words.length) {

wordIndex = 0;

}

}

}

setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();

// Scroll Reveal

const reveals =
document.querySelectorAll(".reveal");

const revealOnScroll = () => {

reveals.forEach(item => {

const top =
item.getBoundingClientRect().top;

if (top < window.innerHeight - 100) {

item.classList.add("active");

}

});

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Language Switch

let currentLang = "id";

const button =
document.getElementById("langToggle");

button.addEventListener("click", () => {

if (currentLang === "id") {

currentLang = "en";

button.textContent = "ID";

document.querySelector("#about .section-title").textContent =
"About Me";

document.querySelector("#skills .section-title").textContent =
"Skills";

document.querySelector("#journey .section-title").textContent =
"Learning Journey";

document.querySelector("#contact .section-title").textContent =
"Contact";

} else {

currentLang = "id";

button.textContent = "EN";

document.querySelector("#about .section-title").textContent =
"Tentang Saya";

document.querySelector("#skills .section-title").textContent =
"Skills";

document.querySelector("#journey .section-title").textContent =
"Learning Journey";

document.querySelector("#contact .section-title").textContent =
"Contact";

}

});
