const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const teamMembers = document.querySelectorAll('.team-member');
let index = 0;

function showSlide(i) {
    const slideWidth = teamMembers[0].clientWidth;
    carousel.style.transform = `translateX(-${i * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % teamMembers.length;
    showSlide(index);
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + teamMembers.length) % teamMembers.length;
    showSlide(index);
});

// Auto-slide functionality
setInterval(() => {
    index = (index + 1) % teamMembers.length;
    showSlide(index);
}, 3000);  // Change slide every 3 seconds

// Initial slide
showSlide(index);