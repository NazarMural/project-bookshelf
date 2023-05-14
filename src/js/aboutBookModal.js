import { fetchSearchResult } from './fetch-search-result';
import {
  postBook,
  deleteBook,
  getBook,
  openSignUpFunc,
} from './authentication';
import iconAmazonUrl from '../images/amazon.png';
import iconBooksUrl from '../images/books.png';
import iconBookShopUrl from '../images/bookShop.png';

const booksCardsList = document.querySelector('.books-cards__list');
const backdrop = document.querySelector('.backdrop');
const btnClose = document.querySelector('.close-btn');
const bookContainer = document.querySelector('.book-container');
const modalBtn = document.querySelector('.modal__btn');
const modalBookBtnSignUp = document.querySelector('.modal-book-btn__signUp');
const underRemoveBtn = document.querySelector('.information-about-status');
const storeIconsList = document.querySelector('.store-icons');

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
    bookContainer.innerHTML = '';
    btnClose.addEventListener('click', onClosebtn);
    const bookItem = e.target.closest('.category-books__item');
    const bookId = bookItem.dataset.id;
    backdrop.classList.remove('backdrop--hidden');

    const bookMarkup = await fetchSearchResult(bookId);
    console.log(bookMarkup.buy_links);
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
      underRemoveBtn.classList.add('is-hidden');
      // Тут має додаватися клас іс хіден
    } else {
      modalBtn.textContent = 'Remove from the shopping list';
      underRemoveBtn.classList.remove('is-hidden');
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
    underRemoveBtn.classList.remove('is-hidden');
    // Тут має забиратися клас іс хіден
  } else {
    deleteBook(bookId);
    modalBtn.textContent = 'Add to shopping list';
    underRemoveBtn.classList.add('is-hidden');
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
  <p class="book-cover__description">${description}</p>
  <ul class="store-icons">
  <li class="store-icons__item">
    <a href="${buy_links}"
      ><img
        src="${iconAmazonUrl}"
        alt="book store"
        width="62"
        height="19"
        class="store-icon"
    /></a>
  </li>
  <li class="store-icons__item">
    <a href="${buy_links}" target="_blank" rel="noreferrer noopener"
      ><img
        src="${iconBooksUrl}"
        alt="book store"
        width="33"
        height="32"
        class="store-icon"
    /></a>
  </li>
  <li class="store-icons__item">
    <a href="${filterlink(buy_links)}"
      ><img
        src="${iconBookShopUrl}"
        alt="book store"
        width="38"
        height="36"
        class="store-icon"
    /></a>
  </li>
</ul>
  </div>`;

  modalBtn.dataset.id = `${_id}`;
  // console.log(filterlink(buy_links));
  return markup;
}

backdrop.addEventListener('click', onBackdropClick);
window.addEventListener('keydown', onKeyDown);

function onBackdropClick(e) {
  if (e.target.classList.contains('backdrop')) {
    backdrop.classList.add('backdrop--hidden');
  }
}

function onKeyDown({ code }) {
  if (code === 'Escape') {
    backdrop.classList.add('backdrop--hidden');
  }
}

// function filterlink(arr) {
//   arr.map(({ url }) => {
//     return url;
//   });
// }
