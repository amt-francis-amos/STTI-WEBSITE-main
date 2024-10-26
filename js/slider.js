let currentIndex = 0;
let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let previousTranslate = 0;

function moveSlide(index) {
    const slides = document.querySelectorAll('.gallery-info');
    const totalSlides = slides.length;

    // Update currentIndex within bounds
    if (index >= totalSlides - 1) {
        currentIndex = totalSlides - 1;
    } else if (index <= 0) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Calculate the offset for translation
    const offset = -currentIndex * 100;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;

    updateDots();
}

function initializeDots() {
    const slides = document.querySelectorAll('.gallery-info');
    const dotsContainer = document.querySelector('.carousel-dots');
    dotsContainer.innerHTML = '';

    // Create dots for each slide
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => moveSlide(index));
        dotsContainer.appendChild(dot);
    });

    updateDots();
}

// Update active dot
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Drag and Touch Support
const carousel = document.querySelector('.carousel');
carousel.addEventListener('touchstart', touchStart);
carousel.addEventListener('touchend', touchEnd);
carousel.addEventListener('touchmove', touchMove);
carousel.addEventListener('mousedown', touchStart);
carousel.addEventListener('mouseup', touchEnd);
carousel.addEventListener('mousemove', touchMove);

// Enable keyboard navigation
carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveSlide(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
        moveSlide(currentIndex - 1);
    }
});

function touchStart(event) {
    isDragging = true;
    startPosition = getPositionX(event);
    carousel.style.cursor = 'grabbing';
}

function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - previousTranslate;

    if (movedBy < -50 && currentIndex < document.querySelectorAll('.gallery-info').length - 1) {
        currentIndex++;
    } else if (movedBy > 50 && currentIndex > 0) {
        currentIndex--;
    }

    moveSlide(currentIndex);
    carousel.style.cursor = 'grab';
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = previousTranslate + currentPosition - startPosition;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

document.addEventListener('DOMContentLoaded', initializeDots);
