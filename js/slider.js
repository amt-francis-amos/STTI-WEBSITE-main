let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.gallery-info');
    const totalSlides = slides.length;

    // Update the current index based on the direction
    currentIndex += direction;

    // Wrap around if at the ends
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    // Calculate the offset
    const offset = -currentIndex * 100; // Each slide takes 100% of the width
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;
}

// Optional: Auto slide every 5 seconds
setInterval(() => moveSlide(1), 5000);
