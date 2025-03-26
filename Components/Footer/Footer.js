// Footer.js
document.addEventListener("DOMContentLoaded", function () {
    const socialIcons = document.querySelectorAll(".social-icon");

    socialIcons.forEach((icon) => {
        const imageUrl = icon.getAttribute("data-image");

        // On mouse enter
        icon.addEventListener("mouseenter", () => {
            if (imageUrl) {
                icon.style.backgroundImage = `url(${imageUrl})`;
                icon.querySelector("i").style.opacity = "0";
            }
        });

        // On mouse leave
        icon.addEventListener("mouseleave", () => {
            icon.style.backgroundImage = "none";
            icon.querySelector("i").style.opacity = "1";
        });
    });
});