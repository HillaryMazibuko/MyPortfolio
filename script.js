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
   EMAIL CONFIRMATION
-------------------------------- */
emailjs.send("service_id", "template_id", formData)
.then(() => alert("Message sent successfully!"));


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


document.querySelectorAll(".swipe-slider").forEach(slider => {
  const track = slider.querySelector(".swipe-track");
  const slides = track.querySelectorAll("img");

  let index = 0;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  track.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener("touchmove", e => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  });

  track.addEventListener("touchend", () => {
    if (!isDragging) return;

    const diff = startX - currentX;

    if (diff > 50 && index < slides.length - 1) {
      index++;
    } else if (diff < -50 && index > 0) {
      index--;
    }

    update();
    isDragging = false;
  });
});


