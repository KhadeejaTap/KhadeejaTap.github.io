// Get the current year
const currentYear = new Date().getFullYear();

// Find the span with id="year" and set its text
document.getElementById("year").textContent = currentYear;

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
  menuBtn.setAttribute("aria-expanded", !expanded);
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-menu li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuBtn.setAttribute("aria-expanded", false);
  });
});
