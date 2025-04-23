const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links li").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// Since we only have one hero image, we don't need slideshow functionality
const heroImage = document.querySelector(".slide img");
const heroContent = document.querySelector(".slide-content");

// Ensure hero image and content are visible
if (heroImage && heroContent) {
    heroImage.style.display = "block";
    heroContent.style.display = "block";
}
