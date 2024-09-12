document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        // Toggle la clase 'open' para mostrar/ocultar el menú
        navMenu.classList.toggle('open');
        // Toggle la clase 'active' para cambiar el color del icono de menú
        menuToggle.classList.toggle('active');
        
        // Gestionar el efecto cascada
        if (navMenu.classList.contains('open')) {
            // Si el menú está abierto, establecer la altura a auto para que se expanda
            navMenu.style.height = navMenu.scrollHeight + 'px';
        } else {
            // Si el menú está cerrado, establecer la altura a 0 para ocultarlo
            navMenu.style.height = '0px';
        }
    });
});
