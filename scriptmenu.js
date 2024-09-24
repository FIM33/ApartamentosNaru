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
document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Cambia la clase del menú

    // Cambiar la clase del botón según el estado del menú
    this.classList.toggle('active'); // Alterna la clase 'active' en el botón
});
