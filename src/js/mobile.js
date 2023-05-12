const btnOpen = document.querySelector('.js-open-menu');
// const btnClose = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

btnOpen.addEventListener('click', onClickBtnOpen);
// btnClose.addEventListener('click',onClickBtnClose)

function onClickBtnOpen() {
        btnOpen.classList.toggle('is-open');
        menuContainer.classList.toggle('is-open')
    
}

// function onClickBtnClose() {
    
//         menuContainer.classList.remove('is-open')
    
// }