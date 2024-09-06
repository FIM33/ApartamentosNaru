/* Carrusel */
.carousel {
    position: relative;
    max-width: 100%;
    overflow: hidden;
}

.carousel-images {
    display: flex;
}

.carousel-image {
    display: none; /* Ocultar todas las imágenes por defecto */
}

.carousel-image img {
    width: 100%;
    height: auto;
    display: block;
}

/* Controles del carrusel */
.carousel-controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.carousel-controls .prev, .carousel-controls .next {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
}
