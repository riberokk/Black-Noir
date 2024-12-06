
let lastScrollPosition = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
const currentScrollPosition = window.scrollY;

if (currentScrollPosition > lastScrollPosition) {
    // Esconde o menu
    header.style.top = '-103px';
} else {
    // Mostra o menu
    header.style.top = '0';
}

lastScrollPosition = currentScrollPosition;
});

