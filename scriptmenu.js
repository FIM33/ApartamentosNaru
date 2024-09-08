document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('nav.menu');

    menuButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});
