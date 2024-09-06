// Almacenar el índice de la diapositiva para cada carrusel
let carouselIndex = {};

// Función para mover las diapositivas
function moveSlide(step, carouselId) {
    // Selecciona el carrusel actual
    let carousel = document.getElementById(carouselId);
    let slides = carousel.querySelectorAll('.carousel-image');

    // Inicializa el índice del carrusel si no existe
    if (!carouselIndex[carouselId]) {
        carouselIndex[carouselId] = 0;
    }

    // Actualizar el índice del carrusel
    carouselIndex[carouselId] += step;

    // Si el índice es menor que 0, vuelve a la última diapositiva
    if (carouselIndex[carouselId] < 0) {
        carouselIndex[carouselId] = slides.length - 1;
    }

    // Si el índice es mayor que el número de diapositivas, vuelve a la primera
    if (carouselIndex[carouselId] >= slides.length) {
        carouselIndex[carouselId] = 0;
    }

    // Ocultar todas las diapositivas
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    // Mostrar la diapositiva actual
    slides[carouselIndex[carouselId]].style.display = 'block';
}

// Inicializar los carruseles al cargar la página
window.onload = function() {
    // Inicializa todos los carruseles
    let carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        let slides = carousel.querySelectorAll('.carousel-image');
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        slides[0].style.display = 'block'; // Mostrar la primera diapositiva por defecto
    });
};
