const navLinks = document.querySelector(".nav-links");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("active"));
});

navLinks.addEventListener("click", function () {
    navLinks.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
});