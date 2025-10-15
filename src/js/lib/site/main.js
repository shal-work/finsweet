import '../lib';


window.addEventListener('DOMContentLoaded', (e) => {
    $('.header__burger').on('click', () => {toggleBurger()});
    $('.menu').on('click', () => {toggleBurger()});
    $('.btn-divesea').on('click', () => {toggleBurger()});
    $('.header__btn').on('click', () => {toggleBurger()});
    
    function toggleBurger () {
        $('.header').toggleClass("fadeIn-open");
        // $('.page').toggleClass('none-scroll');
        $('.header__burger').toggleBooleanAttribute('aria-expanded');
        const burger = document.querySelector('.header__burger');
        let expanded = burger.getAttribute('aria-expanded') === 'true';  
        if (Boolean(expanded)) {
            $('.header__burger').toggleChangeAttribute('aria-label', 'Закрыть меню');
        } else {
            $('.header__burger').toggleChangeAttribute('aria-label', 'Открыть меню');
        }
    }
});
