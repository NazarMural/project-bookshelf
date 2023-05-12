import { fetchSearchResult } from './fetch-search-result';
const booksCardsList = document.querySelector('.books-cards__list');
const backdrop = document.querySelector('.backdrop--hidden');
const btnClose = document.querySelector('.close-btn');
const bookContainer = document.querySelector('.book-container');

booksCardsList.addEventListener('click', openModal);

async function openModal(e) {
  if (e.target.nodeName === 'IMG') {
    btnClose.addEventListener('click', onClosebtn);
    const bookItem = e.target.closest('.category-books__item');
    const bookId = bookItem.dataset.id;
    backdrop.classList.remove('backdrop--hidden');
    const bookMarkup = await fetchSearchResult(bookId);
    console.log(bookMarkup);
    bookContainer.insertAdjacentHTML('beforeend', createBookMarup(bookMarkup));
  }
}

function onClosebtn() {
  backdrop.classList.add('backdrop--hidden');
  bookContainer.innerHTML = '';
}
// book_image buy_links title description author

function createBookMarup({
  book_image,
  buy_links,
  title,
  description,
  author,
}) {
  const markup = `<img src="${book_image}" alt="${title}" />
  <h2>${title}</h2>
  <p>${author}</p>
  <p>${description}</p>
  <svg width="10" height="10"><use href="${buy_links}"></use></svg>`;

  return markup;
}
