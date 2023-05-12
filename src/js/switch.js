const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header');
const logotextEl = document.querySelector('.logo__text');
const toggleEl = document.querySelector('#toggle');
const btnBurgerEl = document.querySelector('.js-open');
const headerLinEl = document.querySelector('.js-link-home');
const headerLinkElS = document.querySelector('.js-link-shoping');
const iconEl = document.querySelector('.js-icon');
const headerBurgerEl = document.querySelector('.js-open-menu');
const btnCloseBurger = document.querySelector('header__burger-close');




toggleEl.addEventListener('click', onclickToggleEl);

function onclickToggleEl(event) {
    console.log(event.currentTarget)
    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logotextEl.classList.toggle('dark__icon');
    btnBurgerEl.classList.toggle('dark__icon');
    headerBurgerEl.classList.toggle('dark__text');
    
    if (!headerLinEl.classList.contains('current')) {
        headerLinEl.classList.toggle('dark__text')
    }
    if (!headerLinkElS.classList.contains('current')) {
        headerLinkElS.classList.toggle('dark__text')
    }
   
    if (!iconEl.classList.contains('current')) {
        iconEl.classList.toggle('dark__icon')
    }

   
}