document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".header-burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    
    if (burger && mobileMenu) {
        burger.addEventListener("click", function() {
            this.classList.toggle("active");
            mobileMenu.classList.toggle("active");
        });
    }
});