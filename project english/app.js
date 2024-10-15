// app.js

// Function to toggle mobile navigation
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);
