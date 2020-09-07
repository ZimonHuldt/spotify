const menuIcon = document.querySelector(".hm-m");
const navbar = document.querySelector(".hamburger-nav")
const overlay = document.querySelector(".overlay")

menuIcon.addEventListener("click", () => {
    overlay.toggle("overlay-change")
} )

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});