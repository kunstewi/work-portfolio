// Navbar

const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => navbar.classList.toggle("sticky", window.scrollY > 0));

const menu = document.querySelector("menu");
const toggleMenu = () => menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);
document.querySelector(".close-btn").addEventListener("click", toggleMenu);

document
.querySelectorAll(".menu a")
.forEach((link) => link.addEventListener("click", toggleMenu));

// ScrollReveal Implementation
document.addEventListener("DOMContentLoaded", function() {
  // Configure ScrollReveal
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
  });
  
  // Hero Section Reveal
  sr.reveal('.hero-headline h1', { delay: 200 });
  sr.reveal('.hero-headline h2', { delay: 300 });
  sr.reveal('.hero-buttons', { delay: 400 });
  sr.reveal('.hero-logos', { 
    delay: 500,
    origin: 'left'
  });
  sr.reveal('.hero-tagline', { 
    delay: 600,
    origin: 'right'
  });
  sr.reveal('.hero-section img', {
    origin: 'top',
    delay: 300
  });
  
  // About Section Reveal
  sr.reveal('.about-headline', { 
    delay: 200,
    interval: 200
  });
  sr.reveal('.about img', { 
    origin: 'right',
    delay: 400
  });
  
  // Works Section Reveal
  sr.reveal('.works h1', { delay: 200 });
  sr.reveal('.work-item', { 
    delay: 300,
    interval: 200 
  });
  
  // Testimonials Reveal
  sr.reveal('.testimony', { 
    delay: 200,
    interval: 150,
    origin: 'bottom'
  });
  
  // Callout Section Reveal
  sr.reveal('.callout-content', { delay: 200 });
  sr.reveal('.callout-img-left', { 
    origin: 'left',
    delay: 300
  });
  sr.reveal('.callout-img-right', { 
    origin: 'right',
    delay: 300
  });
  
  // Footer Reveal - Enhanced with staggered animations
  sr.reveal('footer::before', {
    delay: 100,
    distance: '0px',
    origin: 'left',
    scale: 0.9
  });
  
  sr.reveal('.footer-column', {
    delay: 200,
    interval: 150,
    distance: '40px'
  });
  
  sr.reveal('.footer-column h3', {
    delay: 300,
    interval: 150,
    distance: '20px',
    origin: 'left'
  });
  
  sr.reveal('.footer-links li, .footer-contact li', {
    delay: 400,
    interval: 100,
    distance: '20px',
    origin: 'right'
  });
  
  sr.reveal('.socials', {
    delay: 500,
    distance: '30px',
    origin: 'bottom'
  });
  
  sr.reveal('.social-box', {
    delay: 600,
    interval: 100,
    distance: '20px',
    origin: 'bottom',
    scale: 0.5
  });
  
  sr.reveal('.footer-bottom', {
    delay: 700,
    distance: '20px',
    origin: 'bottom'
  });
});

// Add event listeners for additional footer interactions
document.addEventListener("DOMContentLoaded", function() {
  // Optional: Add hover effects for footer columns
  const footerColumns = document.querySelectorAll('.footer-column');
  
  footerColumns.forEach(column => {
    column.addEventListener('mouseenter', function() {
      this.querySelectorAll('li, p, h3').forEach(el => {
        el.style.transition = 'all 0.3s ease';
      });
    });
  });
});
