const refs = {
  btnToTop: document.querySelector('.button-up'),
};

refs.btnToTop.addEventListener('click', () => {
  scrollUp();
});

export function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
