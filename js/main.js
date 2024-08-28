// main.js

function toggleMenu() {
    const menu = document.querySelector('.project-list');
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const iconBars = document.querySelector('.icon-bars');
    const iconClose = document.querySelector('.icon-close');

    // Toggle class 'show' for menu
    menu.classList.toggle('show');
    
    // Toggle class 'active' for hamburger button
    hamburgerButton.classList.toggle('active');

    // Toggle visibility of icons
    iconBars.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
}

// Add event listener to call toggleMenu on document ready
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
});
