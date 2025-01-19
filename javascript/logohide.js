let lastScrollTop = 0;
const logo = document.getElementById('logo');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset;

    if (currentScroll > 20) {
    logo.style.display = 'none';  // Hide the logo
    } else {
    logo.style.display = 'block';  // Show the logo
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});