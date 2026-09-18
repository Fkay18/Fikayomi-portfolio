const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

navLinks.addEventListener("click", function () {
    navLinks.classList.remove("active");
});