// Contact Form Validation

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all the fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been submitted.");

    contactForm.reset();
});
// Book Now Buttons

const bookButtons = document.querySelectorAll(".book-btn");

bookButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Thank you for choosing TravelX! ✈️\n\nYour booking request has been received.");

    });

});
// Explore Buttons

const exploreButtons = document.querySelectorAll(".destination-card button");

exploreButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const destination = button.parentElement.querySelector("h3").textContent;

        alert("Great choice! 🌍\n\nYou selected " + destination + ".");

    });

});


// Smooth Scrolling

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        const text = link.textContent;

        if (text === "Home") {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    });

});
const searchInput =
    document.getElementById("destinationSearch");