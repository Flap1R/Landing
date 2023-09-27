document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menuContainer = document.querySelector('.menu-container');

    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menuContainer.classList.toggle('open');
    });
});
