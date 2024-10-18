// JavaScript for animations and preloader
document.addEventListener('DOMContentLoaded', function() {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none'; // Hide preloader after page load
});

const nav = document.getElementById('nav');
const navToggle = document.getElementById('nav-toggle');
const navCloseInside = document.getElementById('nav-close-inside');

// Function to toggle the sidebar
function toggleNav() {
  nav.classList.toggle('nav-open');
}

// Open the sidebar when clicking on the toggle button
navToggle.addEventListener('click', toggleNav);

// Close the sidebar when clicking on the close button inside the sidebar
navCloseInside.addEventListener('click', toggleNav);

// Close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
  if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      nav.classList.remove('nav-open');
  }
});


// Enhanced Intersection Observer for smooth animations on scroll
const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('animate'); // Trigger CSS animation
  }
});
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

elements.forEach(element => {
observer.observe(element);
});
