// Custom JS (you can add features here later)
document.addEventListener("DOMContentLoaded", function () {
  console.log("Navbar loaded successfully!");
});
// Optional JS - autoplay configuration
document.addEventListener("DOMContentLoaded", function () {
  const heroCarousel = document.querySelector('#heroCarousel');
  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 4000, // auto slide every 4 seconds
    ride: 'carousel'
  });
});
// Optional - confirm section loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("About section loaded successfully!");
});
// Optional - check section loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Services section loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("Projects section loaded successfully!");
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    this.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});
// Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
