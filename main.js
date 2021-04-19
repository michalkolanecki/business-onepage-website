const button = document.querySelector('.hero__btn--action-js');

console.log(button);

button.addEventListener('click', () => {
    const heading = document.querySelector('.hero--js');
    heading.innerHTML = "Your change main title, you now Javascript";
});

const hamburger = document.querySelector ('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});