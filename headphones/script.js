const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Event listener to toggle menu and change icon
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle menu visibility
    hamburger.classList.toggle('active'); // Toggle hamburger to X icon
    if (hamburger.classList.contains('active')) {
        hamburger.innerHTML = '✕'; // Change to X icon
    } else {
        hamburger.innerHTML = '☰'; // Change back to hamburger icon
    }
});
