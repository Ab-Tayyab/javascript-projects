const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const homeButton = document.getElementById('home');
const aboutButton = document.getElementById('about');
const skillsButton = document.getElementById('skills');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
}

homeButton.addEventListener('click', () => {
    currentIndex = 0;
    updateCarousel();
});

aboutButton.addEventListener('click', () => {
    currentIndex = 1;
    updateCarousel();
});

skillsButton.addEventListener('click', () => {
    currentIndex = 2;
    updateCarousel();
});