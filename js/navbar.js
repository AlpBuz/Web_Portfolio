
export function navbarMovement(){
    const navbar = document.getElementById("main-header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add('main-header-scrolled');
        } else {
            navbar.classList.remove('main-header-scrolled');
            navbar.classList.add("main-header");
        }

    });
}