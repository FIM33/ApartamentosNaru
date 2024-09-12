// Seleccionar el botón del menú y el menú de navegación
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Añadir un evento de clic al botón del menú
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' en el menú de navegación y el botón del menú
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
