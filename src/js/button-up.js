const refs = {
  btnToTop: document.querySelector('.button-up__box'),
};

refs.btnToTop.addEventListener('click', () => {
  scrollUp();
});

window.addEventListener('scroll', () => {
  toggleBtnVisibility();
});

export function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function toggleBtnVisibility() {
  if (window.pageYOffset > 0) {
    refs.btnToTop.classList.remove('is-hidden');
  } else {
    refs.btnToTop.classList.add('is-hidden');
  }
}
