document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.nav-menu');
    const icon = this.querySelector('i');
    menu.classList.toggle('show');
    icon.classList.toggle('active'); // Cambia esta línea
});
