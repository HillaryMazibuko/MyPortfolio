/* =====================================================
   Portfolio JavaScript
   Author: Hillary Mazibuko
   Purpose: Professional UI interactions & UX polish
   ===================================================== */

/* ------------------------------
   ACTIVE NAVIGATION LINK
-------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

/* ------------------------------
   SMOOTH SCROLLING (ANCHORS)
-------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* ------------------------------
   CONTACT FORM (SAFE DEMO MODE)
-------------------------------- */
const contactForm = document.querySelector("form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();

    alert(
      "Thank you for reaching out!\n\n" +
      "This form is currently in demo mode.\n" +
      "It can be connected to EmailJS, Formspree, or Netlify Forms."
    );

    contactForm.reset();
  });
}

/* ------------------------------
   SCROLL REVEAL ANIMATION
-------------------------------- */
const revealElements = document.querySelectorAll(".card, .section");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ------------------------------
   FOOTER YEAR AUTO-UPDATE
-------------------------------- */
const footer = document.querySelector("footer");

if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = footer.innerHTML.replace(/\d{4}/, year);
}

/* ------------------------------
   FUTURE GIS EXTENSION PLACEHOLDER
-------------------------------- */
/*
  This is where you can later add:
  - Leaflet.js map initialization
  - Mapbox layers
  - Spatial filters
  - Survey data visualization
*/
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});