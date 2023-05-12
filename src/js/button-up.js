const refs = {
  btnToTop: document.querySelector('.button-up'),
};

refs.btnToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
