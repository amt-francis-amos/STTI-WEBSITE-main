let currentIndex = 0;

// Function to move slides
function moveSlide(index) {
    const slides = document.querySelectorAll('.gallery-info');
    const totalSlides = slides.length;

    // Restrict movement beyond the last slide
    if (index >= totalSlides - 1) {
        currentIndex = totalSlides - 1; // Stop at last slide
    } else if (index <= 0) {
        currentIndex = 0; // Stop at first slide
    } else {
        currentIndex = index; // Move within bounds
    }

    // Calculate offset for transformation
    const offset = -currentIndex * 100;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;

    // Update the dots to reflect the active slide
    updateDots();
}

// Initialize dots based on the number of slides
function initializeDots() {
    const slides = document.querySelectorAll('.gallery-info');
    const dotsContainer = document.querySelector('.carousel-dots');
    dotsContainer.innerHTML = '';

    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => moveSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Set the initial active dot
    updateDots();
}

// Update the dot status to show the active slide
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Initialize dots on load
document.addEventListener('DOMContentLoaded', initializeDots);
