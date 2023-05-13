import { fetchSearchResult } from './fetch-search-result';
import {
  postBook,
  deleteBook,
  getBook,
  openSignUpFunc,
} from './authentication';

const booksCardsList = document.querySelector('.books-cards__list');
const backdrop = document.querySelector('.backdrop--hidden');
const btnClose = document.querySelector('.close-btn');
const bookContainer = document.querySelector('.book-container');
const modalBtn = document.querySelector('.modal__btn');
const modalBookBtnSignUp = document.querySelector('.modal-book-btn__signUp');

booksCardsList.addEventListener('click', openModal);
modalBookBtnSignUp.addEventListener('click', openSignUpFunc);
modalBtn.addEventListener('click', addAndRemoveButton);

async function openModal(e) {
  let buttonState = true;
  if (
    e.target.nodeName === 'DIV' ||
    e.target.nodeName === 'P' ||
    e.target.nodeName === 'H2' ||
    e.target.nodeName === 'A'
  ) {
    btnClose.addEventListener('click', onClosebtn);
    const bookItem = e.target.closest('.category-books__item');
    const bookId = bookItem.dataset.id;
    backdrop.classList.remove('backdrop--hidden');

    const bookMarkup = await fetchSearchResult(bookId);
    bookContainer.insertAdjacentHTML('beforeend', createBookMarup(bookMarkup));

    const varGetBook = await getBook();
    if (varGetBook !== null) {
      for (let i = 0; i < varGetBook.length; i++) {
        if (varGetBook[i]._id === bookId) {
          buttonState = false;
          break;
        }
      }
    }
    if (buttonState) {
      modalBtn.textContent = 'Add to shopping list';
      // Тут має додаватися клас іс хіден
    } else {
      modalBtn.textContent = 'Remove from the shopping list';
      // Тут має забиратися клас іс хіден
    }
  }
}

async function addAndRemoveButton(e) {
  let buttonState = true;

  const varGetBook = await getBook();

  const bookId = modalBtn.dataset.id;
  const bookMarkup = await fetchSearchResult(bookId);

  if (varGetBook !== null) {
    for (let i = 0; i < varGetBook.length; i++) {
      if (varGetBook[i]._id === bookId) {
        buttonState = false;
        break;
      }
    }
  }

  if (buttonState) {
    postBook(bookMarkup);
    modalBtn.textContent = 'Remove from the shopping list';
    // Тут має забиратися клас іс хіден
  } else {
    deleteBook(bookId);
    modalBtn.textContent = 'Add to shopping list';
    // Тут має додаватися клас іс хіден
  }
}

function onClosebtn() {
  backdrop.classList.add('backdrop--hidden');
  bookContainer.innerHTML = '';
}

function createBookMarup({
  _id,
  book_image,
  buy_links,
  title,
  description,
  author,
}) {
  const markup = `<img src="${book_image}" alt="${title}"  class="book-cover"/>
  <div class="text-container"><h2 class="book-cover__title">${title}</h2>
  <p class="book-cover__author">${author}</p>
  <p class="book-description">${description}</p>
  <svg width="10" height="10"><use href=""></use></svg></div>`;

  modalBtn.dataset.id = `${_id}`;
  return markup;
}
