const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header');
const logotextEl = document.querySelector('.logo__text');
const toggleEl = document.querySelector('#toggle');
const btnBurgerOpen = document.querySelector('.js-open-menu');
const headerLinEl = document.querySelector('.js-link-home');
const headerLinkElS = document.querySelector('.js-link-shoping');
const iconEl= document.querySelector('.js-icon');
const iconBurgerOpen=document.querySelector('.icon__burger--open')
const btnBurgerClose=document.querySelector('.js-close-menu')
const iconBurgerClose=document.querySelector('.icon__burger--close')


toggleEl.addEventListener('click', onclickToggleEl);

function onclickToggleEl(event) {
    console.log(event.currentTarget)
    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logotextEl.classList.toggle('dark__icon');
    btnBurgerOpen.classList.toggle('button-black')
    iconBurgerOpen.classList.toggle('icon-black')
    btnBurgerClose.classList.toggle('button-black')
    iconBurgerClose.classList.toggle('icon-black')

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