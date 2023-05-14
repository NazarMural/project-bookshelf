import { fetchSearchResult } from './fetch-search-result';
import {
  postBook,
  deleteBook,
  getBook,
  openSignUpFunc,
} from './authentication';
import amazonLogo from '../images/amazonLogo.png';
import bookLogo from '../images/bookLogo.png';
import bookShopLogo from '../images/bookShopLogo.png';

const booksCardsList = document.querySelector('.books-cards__list');
const backdrop = document.querySelector('.backdrop');
const btnClose = document.querySelector('.close-btn');
const bookContainer = document.querySelector('.book-container');
const modalBtn = document.querySelector('.modal__btn');
const modalBookBtnSignUp = document.querySelector('.modal-book-btn__signUp');
const underRemoveBtn = document.querySelector('.information-about-status');
const bodyEl = document.body;
const modalEl = document.querySelector('.modal');

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
    bodyEl.classList.add('modal-open');

    const bookMarkup = await fetchSearchResult(bookId);
    console.log(bookMarkup.buy_links);
    bookContainer.insertAdjacentHTML('beforeend', createBookMarup(bookMarkup));
    // if (bodyEl.classList.contains('dark-theme')) {
    //   modalEl.classList.toggle('dark-theme');
    // }

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
  bodyEl.classList.remove('modal-open');
}

function createBookMarup({
  _id,
  book_image,
  buy_links: [
    { name: name1, url: url1 },
    { name: name2, url: url2 },
    { name: name3, url: url3 },
  ],
  title,
  description,
  author,
}) {
  const markup = `<img src="${book_image}" alt="${title}"  class="book-cover"/>
  <div class="text-container"><h2 class="book-cover__title">${title}</h2>
  <p class="book-cover__author">${author}</p>
  <p class="book-cover__description">${description || 'No description'}</p>
  <ul class="store-icons">
  <li class="store-icons__item">
    <a href="${url1}"
      class="icon-link"><img
        src="${amazonLogo}"
        alt="${name1}"
        width="62"
        height="19"
        class="store-icon"
        target="_blank" 
    /></a>
  </li>
  <li class="store-icons__item">
    <a href="${url2}" target="_blank" 
    class="icon-link" ><img
        src="${bookLogo}"
        alt="${name2}"
        width="33"
        height="32"
        class="store-icon"
    /></a>
  </li>
  <li class="store-icons__item">
    <a href="${url3}"
    target="_blank" class="icon-link"><img
        src="${bookShopLogo}"
        alt="${name3}"
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
