// Select the toggle button by its ID
const toggleButton = document.getElementById('mode-toggle');

// Add an event listener to the toggle button for the 'click' event
toggleButton.addEventListener('click', function() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');

    // Change the button's text and emoji based on the current mode
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️'; // Sun emoji for light mode
    } else {
        toggleButton.textContent = '🌙'; // Moon emoji for dark mode
    }
});
let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

// Optional: Auto-slide functionality
setInterval(() => {
    moveCarousel(1);
}, 5000); // Change slide every 5 seconds

