document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    const carouselImages = document.querySelector('.carousel-images');

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0; // Regresar al primer slide
        } else if (index < 0) {
            currentSlide = totalSlides - 1; // Ir al último slide
        } else {
            currentSlide = index;
        }

        const offset = -currentSlide * 100; // Desplazar según el índice del slide
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    function moveSlide(step) {
        showSlide(currentSlide + step);
    }

    // Inicializar el carrusel mostrando el primer slide
    showSlide(currentSlide);

    // Agregar eventos a los controles
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});



