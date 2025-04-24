import '../lib';


window.addEventListener('DOMContentLoaded', (e) => {
    $('.header__burger').on('click', () => {toggleBurger()});
    $('.menu').on('click', () => {toggleBurger()});
    $('.btn-divesea').on('click', () => {toggleBurger()});
    $('.header__btn').on('click', () => {toggleBurger()});
    function toggleBurger () {
        $('.header').toggleClass("fadeIn-open");
        $('.page').toggleClass('none-scroll');
    }
});
