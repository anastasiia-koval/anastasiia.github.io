const navBar = document.querySelector('nav');
const cardsContainer = document.querySelector('cardsContainer');

window.addEventListener("scroll", () => {
    navBar.classList.add("sticky", window.scrollY > 0);
})

