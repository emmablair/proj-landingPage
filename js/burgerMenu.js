// MOBILE hamburger menu => signs.html only

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navList');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav__active');
    });
}

navSlide();