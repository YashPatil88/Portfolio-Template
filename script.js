// Typing Effect
const typingText = document.getElementById("typing");
const roles = ["Web Developer", "Designer", "Freelancer", "Business Consultant"];
let roleIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  currentText = roles[roleIndex];
  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 80);
    }
  } else {
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
    } else {
      setTimeout(typeEffect, 120);
    }
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Fade-in Animation
const fadeElements = document.querySelectorAll(".fade-in");
function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);

// Navbar Burger Menu
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
