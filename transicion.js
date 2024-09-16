let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length; // Cambia entre las imágenes
    images[currentIndex].classList.add('active');
}

// Cambia de imagen cada 3 segundos
setInterval(changeImage, 3000);
