document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        // Alterna la clase que controla la visibilidad del menú
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        } else {
            navMenu.classList.add('show');
        }
    });
});
