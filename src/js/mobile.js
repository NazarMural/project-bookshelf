const btnOpen = document.querySelector('.js-open-menu');
// const btnClose = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

btnOpen.addEventListener('click', onClickBtnOpen);
// btnClose.addEventListener('click',onClickBtnClose)
const btnClose=document.querySelector('.header__burger-close')

btnClose.addEventListener('click',onClickBtnClose )
// svgClose.style.display='none';
;

function onClickBtnOpen() {
        btnOpen.classList.toggle('is-open');
        menuContainer.classList.toggle('is-open')
        if (btnOpen.classList.contains('is-open')) {
                btnClose.style.display = 'block';
                btnOpen.style.display = 'none';
                
       
        }
    
}


function onClickBtnClose() {
        btnOpen.classList.toggle('is-open');
        menuContainer.classList.remove('is-open')
    if (btnOpen.classList.contains('is-open')) {
                btnClose.style.display = 'none';
                btnOpen.style.display = 'block';
           
        }
        // if (!btnOpen.classList.contains('is-open')) {
        //         svgClose.style.display = 'block';
        //         btnOpen.style.display = 'none';
           
        // }
    
}