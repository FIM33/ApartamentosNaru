document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        // Alterna la clase 'open' para mostrar/ocultar el menú
        navMenu.classList.toggle('open');
        // Alterna la clase 'active' para cambiar el color del icono de menú
        menuToggle.classList.toggle('active');

        // Gestiona el efecto de cascada
        if (navMenu.classList.contains('open')) {
            // Establece la altura del menú al valor de scrollHeight para mostrarlo
            navMenu.style.height = navMenu.scrollHeight + 'px';
        } else {
            // Establece la altura del menú a 0 para ocultarlo
            navMenu.style.height = '0px';
        }
    });
});
