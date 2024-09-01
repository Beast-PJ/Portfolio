const toggleButton = document.getElementById('mode-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '☀️';
    } else {
        toggleButton.textContent = '🌙'; 
    }
});
let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

setInterval(() => {
    moveCarousel(1);
}, 5000); 

const textarea = document.querySelector('textarea');

textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight}px`;
});

