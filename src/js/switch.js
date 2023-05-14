const bodyEl = document.querySelector('body');
const headerEl = document.querySelector('.header');
const logotextEl = document.querySelector('.logo__text');
// const toggleEl = document.querySelector('#toggle');
const btnBurgerOpen = document.querySelector('.js-open-menu');
const headerLinEl = document.querySelector('.js-link-home');
const headerLinkElS = document.querySelector('.js-link-shoping');
const iconEl= document.querySelector('.js-icon');
const iconBurgerOpen=document.querySelector('.icon__burger--open')
const btnBurgerClose=document.querySelector('.js-close-menu')
const iconBurgerClose=document.querySelector('.icon__burger--close')

const toggleEl = document.querySelector('#toggle');
toggleEl.addEventListener('click', onclickToggleEl);

function onclickToggleEl(event) {

    bodyEl.classList.toggle('dark-theme');
    headerEl.classList.toggle('dark');
    logotextEl.classList.toggle('dark__icon');
    btnBurgerOpen.classList.toggle('button-black');
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
    
    // if (bodyEl.classList.contains('dark-theme')
    // ) {
    //     localStorage.setItem('DARKBODY', 'dark-theme');
    //     return;
        
    // }
    // localStorage.removeItem('DARK');
    
    // if( headerEl.classList.contains('dark') ||
    //     logotextEl.classList.contains('dark__icon') || btnBurgerOpen.classList.contains('button-black') 
    //     ||  iconBurgerOpen.classList.contains('icon-black') || btnBurgerClose.classList.contains('button-black')
    // || iconBurgerClose.classList.contains('icon-black') || headerLinEl.classList.contains('dark__text')
    // ||  headerLinkElS.classList.contains('dark__text') ||  iconEl.classList.toggle('dark__icon')) {
    //     // localStorage.setItem('DARKBODY', 'dark-theme');
    //     localStorage.setItem('DARKHEADER', 'dark');
    //     localStorage.setItem('DARKLOGOTEXT', 'dark__icon');
    //     localStorage.setItem('DARKBTNBURGEROPEN', 'button-black');
    //     localStorage.setItem('DARCICONOPEN', 'icon-black');
    //     localStorage.setItem('DARKBTNBURGERCLOSE', 'button-black');
    //     localStorage.setItem('DARCICONCLOSE', 'icon-black');
    //     localStorage.setItem('DARKTEXT', 'dark__text');
    //     localStorage.setItem('DARKTEXTLINK', 'dark__text');
    //     localStorage.setItem('DARKICONEL', 'dark__icon')
    //     return;
        
    // }

    // // localStorage.removeItem('DARK');
    // localStorage.removeItem('DARKHEADER');
    // localStorage.removeItem('DARKLOGOTEXT');
    // localStorage.removeItem('DARKBTNBURGEROPEN');
    // localStorage.removeItem('DARCICONOPEN');
    // localStorage.removeItem('DARKBTNBURGERCLOSE');
    // localStorage.removeItem('DARCICONCLOSE');
    // localStorage.removeItem('DARKTEXT');
    // localStorage.removeItem('DARKTEXTLINK');
    // localStorage.removeItem('DARKICONEL');

    
   
}


