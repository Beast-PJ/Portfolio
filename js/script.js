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

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var images = document.querySelectorAll(".gallery-item img");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Optional: Validate form data before sending
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Prepare form data as JSON
        const formData = {
            name: name,
            email: email,
            message: message
        };

        // Send form data to backend (example using fetch API)
        fetch("your-backend-endpoint", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Handle successful form submission (e.g., show success message)
            console.log("Form submission successful:", data);
            // Example: Show success message
            alert("Message sent successfully!");
            form.reset(); // Optional: Clear form fields
        })
        .catch(error => {
            // Handle errors (e.g., show error message)
            console.error("Error submitting form:", error);
            alert("Oops! Something went wrong. Please try again later.");
        });
    });
});


