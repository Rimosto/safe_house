

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

// Optionally, close the sidebar when clicking outside of it
document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
        nav.classList.remove('nav-open');
    }
});

// Improved Intersection Observer for smooth animations
const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');  // Add animation class when element is in view
      observer.unobserve(entry.target);       // Stop observing after the animation triggers
    }
  });
});

elements.forEach(element => {
  observer.observe(element);  // Observe each element to trigger animation
});
