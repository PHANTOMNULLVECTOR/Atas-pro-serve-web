// Dark / Light mode toggle
const toggle = document.getElementById("theme-toggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("ri-sun-line");
  });
}

// Mobile menu toggle
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

// Close menu when link is clicked (mobile UX)
document.querySelectorAll(".nav__menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("show");
  });
});

// FAQ toggle (ALL FAQ SECTIONS)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".faq-card");
      card.classList.toggle("active");
    });
  });
});
