document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.navbar ul');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');

        // Optional: Add animation to the hamburger icon
        navToggle.classList.toggle('is-active');
    });
});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check saved preference
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  body.classList.add('light-mode');
}

// Toggle on click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);

  // Update emoji
  themeToggle.textContent = body.classList.contains('light-mode') ? '🌙' : '☕';
});

// Set initial icon
themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☕';
