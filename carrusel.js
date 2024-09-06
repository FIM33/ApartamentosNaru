let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentSlide = 0; // Regresar al primer slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Ir al último slide
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    const carouselImages = document.querySelector('.carousel-images');
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Inicializar el carrusel mostrando el primer slide
showSlide(currentSlide);

// Funciones para avanzar y retroceder en el carrusel
function moveSlide(step) {
    showSlide(currentSlide + step);
}

// Agregar eventos a los controles
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

